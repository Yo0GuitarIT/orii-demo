# 9. 平常使用什麼編輯器與瀏覽器？還有哪些輔助開發的工具？

## 編輯器

- **Visual Studio Code**：目前最常使用的編輯器。我會針對開發需求配置對應的套件與設定，並進一步將部分 WebStorm 的優點（例如全域搜尋與跳轉功能）應用在 VSCode 上，打造更貼近個人習慣的開發環境。
- **WebStorm**：目前公司提供的選用 IDE。我在使用過程中觀察它在搜尋、代碼導航上的優勢，並反思如何在 VSCode 上實現類似的體驗。
- **Neovim（搭配 LazyVim）**：個人正在學習與實驗的編輯器，透過 Lua 語言進行設定，目前已可執行基本開發流程，目標是能將其作為可移植性高、極速啟動的主力開發工具。

## 瀏覽器

- **Google Chrome**：主要開發與除錯使用的瀏覽器。
- **Firefox**：作為開發測試與交叉瀏覽器檢查用途。

## 個人開發輔助工具

- **WezTerm**：目前主力使用的終端機工具，支援多分頁、GPU 加速與高度自訂，常用於啟動 dev server 或 shell script。
- **LazyGit**：方便我在終端機快速切換分支、執行 rebase 與 commit 操作，減少上下文切換。
- **GitHub Copilot**：平常在撰寫重複性邏輯、正規表達式或 API 封裝時，有效提供建議與加速思考流程。
- **Chrome DevTools**：常用於 inspect DOM 結構與排查 performance 問題，並搭配：
  - React DevTools
  - Wappalyzer（快速辨識專案技術棧）

## 團隊協作工具

- **Postman / Swagger**：作為串接後端 API 與進行資料結構驗證的重要工具。
- **Prettier**：透過 `.prettierrc` 統一團隊程式碼風格，減少格式爭議。
- **ESLint**：結合 `.eslint.config` 與專案規範，自動提示與修復潛在錯誤，維持程式碼品質。
