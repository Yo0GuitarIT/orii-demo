# 3. call by value 與 call by reference 的差別是什麼？請寫下自己的理解。

雖然題目沒有明確指出語言，但我會以 JavaScript 的角度來說明 call by value / call by reference 的差別，以及實際在 JavaScript 中的應用模式。

## JavaScript 中的傳值方式

嚴格來說，JavaScript **只有 call by value**，但在處理物件（reference type）時，因為變數儲存的是對物件的「參考值（reference）」，導致行為上呈現出類似「call by reference」的效果，這被稱為 **call by sharing** 或 **call by object reference**。

---

## 基礎概念：Stack 與 Heap

在 JavaScript 的執行期間，變數的儲存位置會依照型別不同而不同：

- **原始型別（primitive type）**：例如 number、string、boolean 等，直接將值儲存在 stack 中。
- **參考型別（reference type）**：例如 object、array、function 等，實際資料存在 heap 中，而 stack 中僅儲存一個指向 heap 的參考（pointer）。

這樣的記憶體模型會影響「變數複製後是否彼此影響」。

---

## Call by Value

對於原始型別，變數儲存的是值本身，複製變數時會產生**一份新的值**。

```js
let a = 15; // a -> 15（存在 stack 中）
let b = a; // b 也是 15（另開一格 stack，與 a 無關）

b = 20;

console.log(a); // 15
console.log(b); // 20
```

---

## Call by Reference

這種傳值方式會直接把記憶體位置傳入函式中，讓函式可以**直接改變原變數的值**。
JavaScript 並**不支援這種真正的 call by reference**，但在像 C++ 或 C# 中，透過 `ref` 或 `&` 等關鍵字可以達成。

---

## Call by Sharing

JavaScript 中對於物件的傳遞，是將「參考值」進行傳遞，也就是多個變數指向同一份 heap 記憶體資料。

```js
const obj1 = { name: "James", age: 25 };
const obj2 = obj1;

obj2.age = 30;

console.log(obj1.age); // 30（obj1 也跟著變動）
console.log(obj2.age); // 30
```

這不是直接改變 stack 中的變數本身，而是透過共用同一個 heap 位置來造成變數之間的連動。

---

透過理解其底層記憶體模型（stack/heap）與資料型別的儲存方式後，可以更清楚掌握資料變動的本質，也能有效避免在物件共享上產生預期外的副作用。
