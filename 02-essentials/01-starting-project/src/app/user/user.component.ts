import { Component, Input } from '@angular/core';
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
  // @Input()標記該屬性可從外部設置，因為是接收”外部”來的值，所以需要先訂定”接收的型別”
  // 透過"!"告訴TypeScript這肯定會被設置為某個值
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input() id!: string;

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  // 需要將@Input()的值進行初始化
  // constructor() {
  //   this.avatar = '';
  // }

  onSelectUser() {}
}
