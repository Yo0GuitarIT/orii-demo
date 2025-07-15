# 8. XSS 攻擊如何進行？該如何防禦？

## XSS 攻擊如何進行？

XSS（Cross-site Scripting，跨站腳本攻擊）是指攻擊者在網站中注入惡意 JavaScript，當使用者瀏覽該網站時，這些腳本便會在使用者端執行，進而竊取敏感資料或操控使用者行為。

常見攻擊流程如下：

- 攻擊者將惡意腳本嵌入輸入欄位（如留言板、搜尋框）。
- 若網站在渲染時直接使用 `innerHTML` 等 API 將使用者輸入寫入 DOM，且未經妥善過濾，便會導致腳本執行。
- 惡意腳本可能竊取 Cookie、Token、LocalStorage，甚至模擬使用者進行敏感操作。

## 如何防禦 XSS？

### 第一層防線：輸入處理

- **編碼（Encoding）**：將特殊字元轉為 HTML 實體，避免被當作標籤執行。
- **淨化（Sanitization）**：透過 DOMPurify、Sanitizer API 等工具清除危險標籤與屬性，僅保留安全內容。
- **前後端雙重驗證**：不僅前端要過濾，後端儲存前亦需驗證，避免惡意內容進入資料庫或被再次使用。

### 第二層防線：瀏覽器安全策略

- **CSP（Content Security Policy）**：

  - 限制 script 來源，例如 `script-src 'self'`。
  - 可搭配 nonce、hash 限制 inline script。
  - 建議搭配 `Content-Security-Policy-Report-Only` 模式進行測試。

- **Trusted Types**：

  - 強制開發者只能用受信任物件操作 DOM，降低誤用風險。

- **Sanitizer API**：

  - 使用內建 DOM 清理 API 強化資料安全。

### 第三層防線：降低攻擊影響

- **使用 HttpOnly Cookie 儲存 Token**：避免 JavaScript 直接存取。
- **二次驗證機制（如 OTP、Email 驗證）**：降低攻擊者執行高權限操作的機率。
- **導入 BFF 架構（Backend For Frontend）**：讓 Token 僅存在伺服器與前端短暫互動中，降低暴露面。
- **Web Worker 隔離**：敏感資料存放於 Web Worker 中，可阻止主執行緒 JavaScript 竊取。

### 其他注意事項：

- 渲染 iframe、href、src 屬性時，需避免 `javascript:` 偽協議。
- 不能單靠字串比對過濾，應解析 URL 確認協議來源。
- 建議資料庫中儲存原始資料，並於渲染階段進行適當處理，避免內容在不同平台誤用。

---

> 本題內容參考自《Beyond XSS：探索網頁前端資安宇宙》，並結合個人實務理解彙整而成。
