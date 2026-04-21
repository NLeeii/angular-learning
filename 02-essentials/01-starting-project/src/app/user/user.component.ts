import { Component, Input, input, computed, output, EventEmitter, Output } from '@angular/core';

// type aliases
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface，只能定義 object type
interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // 輸入_input =============================================================================
  // @Input()裝飾器 vs input()函式

  // @Input()標記該屬性可從外部設置，因為是接收”外部”來的值，所以需要先訂定”接收的型別”
  // @Input() "接受輸入" 這個特性及概念，允許重用具有不同數據(由外部輸入)的component
  // 透過"!"告訴TypeScript這肯定會被設置為某個值
  
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input() id!: string;

  @Input({required: true}) user!: User;

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  // signal inputs ========================================================
  // avatar = input<string>();
  // avatar = input.required<string>();

  // 配合signal使用的computed
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  // 輸出_output =============================================================================
  @Output() select = new EventEmitter<string>(); // 加上泛型類型(generic)賦值，讓TypeScript、Aagular知道你將要發出的值的型別

  // ouput()函式用法
  // select = output<string>();

  // 任務:攔截實體點擊事件，按鈕點擊後把自己的id emit出去
  // 負責:觸發與廣播
  onSelectClick() {
    this.select.emit(this.user.id);
  }
}
