import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // encapsulation - 封裝
  // 禁用樣式作用域，禁用封裝
  encapsulation:ViewEncapsulation.None,
  // host
  // 定義作為 host element 上的property
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  label = input.required<string>();
}
