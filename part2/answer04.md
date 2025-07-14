# 4. 什麼是 async / await ？請寫下自己的理解。

在 JavaScript 中，像是發送 API 請求、使用 setTimeout、讀取檔案等行為，都是屬於非同步操作。為了讓開發者能更直觀地撰寫這類流程，JavaScript 引入了 async/await 機制，讓非同步邏輯的撰寫更接近同步的流程思維。

`async/await` 是建立在 `Promise` 之上的語法糖，它的出現是為了改善早期 callback、`.then()` 鍊式結構過於複雜與難以維護的問題。

透過 `await` 等待非同步的結果，再搭配 `try/catch` 進行錯誤處理，我們可以將成功與失敗的邏輯明確區分，讓整體程式碼更可讀、可預期，也更容易除錯。

以下是我在實務開發中常見的使用方式：

```js
const queryData = async (id) => {
  try {
    const { status, message, data } = await apiFunction(id);
    if (status !== "success") {
      console.error("Error: ", message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
```

我目前會將 `async/await` 視為撰寫非同步邏輯的標準做法，特別是在需要串接多個非同步流程（例如：先登入再取得資料）時，能有效提升程式的**可讀性與維護性**，也更容易配合現代框架的開發流程。
