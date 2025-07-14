# 4. 什麼是 async / await ？請寫下自己的理解。

- promise 語法糖 可以寫出更簡潔的異步操作
- 使用情境比如是我們索取 api 等非同步資料的做法
- 可以搭配 try/catch 手法
  可以專注在執行成功和錯誤的內容上

```javascript
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
