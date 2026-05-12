#筆記

1. setValue() vs. patchValue()
- setValue() 必須 100% 吻合 FormGroup 的定義，最初有定義的欄位一個都不能少，可用於:表單的整體重置、初始化、載入完整 API 資料。
- patchValue() 允許局部修補，可以只傳遞表單部分屬性。可用於:局部更新、載入使用者草稿、動態修改單一/部分欄位。
2. FormBuilder - 語法糖，用於快速建立 - control() / group() / array()
3. get() 是 FormGroup 內建的方法。從大表單裡面，將指定名稱的那個子控制項抓出來。
4. FormArray : 
- 不需要為每個control命名 / 適合用於"事先不知道子值的數量"的情況。
- 陣列裡面的東西是沒有名字的，它們只有 「索引值 (Index)」（第 0 個、第 1 個、第 2 個）。所以，你要綁定 FormArray 裡面的欄位時，formControlName 強制規定必須是它的 Index 數字。

5. as 是 TypeScript 的 型別斷言 (Type Assertion)。用以確定得到的值一定是這個型別。
6. 判斷何時該使用 getter :
- 當一個值是「衍生狀態（Derived State）」時： 如果某個值是依賴其他變數（例如 profileForm）計算或提取出來的，就應該使用 Getter。
- 為了維持模板（HTML）的簡潔與可讀性： 當你發現需要在 HTML 中寫出很長的路徑（如 profileForm.get('address.street')）且多次使用時，就在 TypeScript 建立一個對應的 Getter。


#基底
1. AbstractControl 
- 是一個抽象類別（Abstract Class），同時它也是一個型別（Type）。
- 具體表單控制元件類別 FormControl、FormGroup 和 FormArray 的抽象"基底類別"。它提供了它們的通用行為和屬性。
2. FormBuilder - 一個可注入的服務，提供用於建立控制元件實例的工廠方法。


#範例
get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

-> 當你呼叫 get('aliases') 時，Angular 只知道它抓到了一個「表單元件 (AbstractControl)」，但它不知道這到底是一個普通的文字框 (FormControl)？還是一個群組 (FormGroup)？還是一個陣列 (FormArray)？
因為 TypeScript 很嚴格，如果你不告訴它這是一個陣列，它就不允許你使用陣列專屬的方法（例如 .push() 或 .controls）。
所以 as FormArray 就是在向 TypeScript 掛保證，得到的值一定是個 FormArray