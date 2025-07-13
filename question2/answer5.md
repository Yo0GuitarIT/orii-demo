# 5. 什麼是 Closure (閉包)？請寫下自己的理解，並舉一個應用的例子。

Closure（閉包）是指函式可以存取其外部作用域的變數，即使外部函式已經執行完畢，內部函式仍然可以存取外部函式的變數。

應用例子：

```javascript
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
