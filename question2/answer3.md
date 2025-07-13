# 3. call by value 與 call by reference 的差別是什麼？請寫下自己的理解。

call by value：當傳遞基本型別（如 number, string, boolean）作為參數時，函式會複製一份值，因此在函式內部修改參數不會影響原本的變數。

call by reference：當傳遞物件或陣列等複合型別作為參數時，函式會取得該物件的參考（reference），在函式內部修改參數會影響到原本的物件。
