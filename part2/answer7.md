# 7. Browser rendering 中 layout、painting、compositing 分別在做什麼？會如何影響效能？該如何避免？

**Layout（排版）**：計算每個元素的大小與位置。當 DOM 結構或 CSS 變動時會觸發，頻繁 layout 會造成效能下降。

**Painting（繪製）**：將元素的樣式（顏色、陰影、邊框等）繪製到螢幕上的位圖。複雜的樣式或大量 repaint 會影響效能。

**Compositing（合成）**：將多個繪製層（layer）合成，決定最終呈現。動畫、特效常會產生多層合成，若層數過多或頻繁重組也會影響效能。

**效能影響**：

- 過度操作 DOM、頻繁改變樣式會導致 layout/repaint/compositing 重複執行，造成卡頓。

**避免方法**：

- 減少 DOM 操作，批次更新。
- 使用 will-change、transform、opacity 等屬性優化動畫。
- 避免使用高成本 CSS 屬性（如 box-shadow、filter）。
- 善用瀏覽器 DevTools 分析效能瓶頸。
