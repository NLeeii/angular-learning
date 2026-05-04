import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

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
  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }
}
