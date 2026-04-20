import { Component, Input, input, computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

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
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input() id!: string;

  // 需要將@Input()的值進行初始化
  // constructor() {
  //   this.avatar = '';
  // }
  
  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  // signal inputs ========================================================
  // avatar = input<string>();
  // avatar = input.required<string>();

  // 配合signal使用的computed
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  // 輸出_output =============================================================================

  onSelectUser() {}
}
