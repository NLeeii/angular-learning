import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // getter 本質上是一個方法，也就是class中的一個函數。可以像property一樣使用，所以不需要顯示調用和執行，它的目的就是生成和返回一個新值。補充:因為getter可以像property一樣使用，因此在使用時候面不用加"執行用"的()。
  get imagePath() { 
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    alert('click!');
  }
}
