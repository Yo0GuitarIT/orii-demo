# 5. 什麼是 Closure (閉包)？請寫下自己的理解，並舉一個應用的例子。

在 JavaScript 中，**Closure（閉包）是指一個函式能夠記住並存取它定義時的作用域，即使這個函式在其原本的作用域之外執行**。

當一個內部函式被外部函式回傳後，它仍然能夠存取外部函式中的變數，這就是閉包的特性。閉包廣泛應用於私有變數封裝、資料記憶、事件綁定等場景中。

## Closure 範例：React 中的 useState

React 的 `useState` 本身是一個 Hook，背後透過閉包的特性，來記住每次 render 時的狀態值。我們可以用一個簡化版的 `useState` 來模擬這個機制：

```js
function useState(initial) {
  let state = initial;

  const getState = () => state;

  const setState = (newValue) => {
    state = newValue;
  };

  return [getState, setState];
}

const [state, setState] = useState(0);

console.log(state()); // 0

setState(1);
console.log(state()); // 1
```

這裡的 `getState` 和 `setState` 都是閉包，它們在 `useState` 的作用域外部被執行，卻依然可以存取並操作 `state`，這正是 Closure 的核心特性。

在真實的 React 開發中，像這樣的閉包行為讓每個 component 都能「記住自己的狀態」，即使經過重新渲染，也不會互相干擾。

---

**優點：**

- 可實現私有變數，保護資料不被外部直接存取
- 在元件或函式執行完後仍能保留上下文的資料

**缺點：**

- 若不小心造成過多閉包引用，可能會導致記憶體無法釋放（Memory Leak）
- 在大型應用中，過度依賴閉包可能使資料流難以追蹤
