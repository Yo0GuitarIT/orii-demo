# 7. Browser rendering 中 layout、painting、compositing 分別在做什麼？會如何影響效能？該如何避免？

當瀏覽器接收到 HTML 與 CSS 的原始資料後，會經歷以下幾個階段來渲染畫面：

1. **Parsing 階段**：

   - HTML 被解析為 DOM Tree。
   - CSS 被解析為 CSSOM Tree。
   - 最後兩者結合形成 Render Tree，決定哪些元素需要呈現在畫面上。

2. **Layout（又稱 Reflow）**：

   - 根據 Render Tree 計算每個元素的位置與尺寸（例如：寬高、相對位置）。
   - 如果 DOM 結構改變或 CSS 幾何屬性變動（如 padding、margin、width），會觸發整個或部分重排。

3. **Painting**：

   - 根據每個節點的樣式（顏色、陰影、邊框等），轉換成實際的像素。
   - 屬性如 `color`、`background`、`box-shadow` 改變會觸發 repaint。

4. **Compositing**：
   - 如果頁面包含多個圖層（如 transform、fixed、will-change），瀏覽器會分別繪製並在這個階段合成圖層為最終畫面。

## 效能影響：

Layout（Reflow）和 Paint（Repaint）都是**昂貴的操作**，尤其是 layout，會遍歷整個 DOM Tree 重新計算幾何位置，可能導致卡頓。Compositing 雖然成本較低，但過多圖層仍會吃資源。

若在動畫或高頻率操作中頻繁觸發這些階段，會導致明顯的效能問題。

## 優化策略：

- **減少 DOM 操作與 reflow 數量**：如使用 document fragment、`requestAnimationFrame` 批次操作。
- **避免高成本屬性**：如 `box-shadow`、`filter`、過多圖片疊加等。
- **使用 Compositor-only 屬性觸發 GPU 加速**：像 `transform`、`opacity` 可跳過 layout/paint 階段，進入 GPU compositing。
- **善用 DevTools 分析瓶頸**：如 Performance 面板中的 Rendering timeline。
- **導入 Virtual DOM**：像 React、Vue 等框架使用 Virtual DOM 差異比較，避免不必要的真實 DOM 操作，是目前主流效能優化方式之一。

---

我曾在 React 專案中處理效能瓶頸，透過 Chrome DevTools 的 Performance 面板觀察重繪流程，並搭配 React DevTools 檢查元件的重新渲染情況。當發現不必要的 re-render 或 layout 操作時，我會優先考慮調整 props 傳遞方式、使用 `memo` 或避免不必要的 DOM 操作，讓整體效能更穩定。
