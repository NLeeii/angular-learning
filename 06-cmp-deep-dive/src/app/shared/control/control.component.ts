import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // encapsulation - 封裝
  // 禁用樣式作用域(scope)，禁用封裝
  encapsulation:ViewEncapsulation.None,
  // host
  // 定義作為 host element 上的property
  host: {
    class: 'control',
    // 也可以綁定事件
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // 為組件添加property
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked!');
  // }

  // label為屬性 (Property) 或 欄位 (Field)
  label = input.required<string>();

  // Programmatically Access
  // private 是 TypeScript 的 存取修飾詞 (Access Modifier)。
  // 【依賴注入 (DI) 與 DOM 操作】
  // 透過 inject() 向 DI 容器請求 ElementRef 實體。
  // ElementRef 是一個包裝器，透過其 nativeElement 屬性，
  // 允許我們進行 Programmatically Access (指令式/程式化存取)，
  // 以便在 TS 中直接操作真實的 DOM 節點 API (例如: 計算尺寸、整合第三方 JS 套件)。
  // 使用 private 限制此依賴僅限當前類別內部使用，落實封裝性。
  private el = inject(ElementRef);

  // onClick()）不叫 Function，而是稱為 方法 (Method)
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
