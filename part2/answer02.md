# 2. 什麼是 arrow function ？它對 this 有什麼影響？請寫下自己的理解。

Arrow Function 是 ES6 提供的一種函式寫法，讓我們可以用更簡潔的方式撰寫函式，尤其適合用在 callback、邏輯簡單的處理上。

### 語法特色：

- **省略 `function` 關鍵字**
- **隱式回傳（Implicit Return）**：若函式只有單一表達式，可省略 `{}` 和 `return`。
- **參數簡化**：

  - 無參數：`() => { ... }`
  - 一個參數：`param => { ... }`
  - 多個參數：`(a, b) => { ... }`

```js
const sum = (a, b) => a + b;
```

## Arrow Function 對 `this` 的影響

傳統的函式中，`this` 會依據**呼叫位置**而改變，可能指向全域、物件、或其他上下文，因此常需要搭配 `.bind()`、`.call()` 或 `.apply()` 來指定正確的 `this`。

而 **Arrow Function 沒有自己的 `this`**，它會自動**綁定外層的詞法作用域（lexical scope）**，這種特性讓 `this` 更穩定、更容易預測，也更適合在 callback 或非同步邏輯中使用。

```js
const obj = {
  name: "Kevin",
  normalFn: function () {
    console.log("normal:", this.name);
  },
  arrowFn: () => {
    console.log("arrow:", this.name);
  },
};

obj.normalFn(); // "normal: Kevin"
obj.arrowFn(); // "arrow: undefined"（this 指向外層的 window/global）
```

### 什麼時候該用 / 不該用？

- 適合用在：

  - 不需要自己的 `this` 的場景（例如：array methods、React hook callback）
  - 撰寫簡潔 callback 或 functional 程式風格

- 不適合用在：

- 需要定義方法的 class（建議用傳統函式以取得正確的 `this`）
- 需要用 `new` 建立實例的 constructor function（Arrow Function 不能作為 constructor）

---

Arrow Function 不只是語法糖，更是讓 `this` 綁定變得更直觀、穩定的重要特性。理解它與傳統函式在 `this` 行為上的差異，能幫助我們寫出更安全、可維護的程式碼。
