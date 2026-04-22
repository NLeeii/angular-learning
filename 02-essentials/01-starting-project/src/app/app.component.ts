import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root', // 在 HTML 中使用的標籤名稱
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html', // 定義元件的HTML
  styleUrl: './app.component.scss', // 定義元件的CSS。style 寫陣列樣式;styleUrls 指定外部 css 檔案路徑陣列
})

// AppComponent 是 Smart Component
// AppComponent (負責「管理資料」與「做決策」)
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string; 

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  // 任務：接收點擊事件傳來的 id (user.component.ts中發送出的id)
  // 負責:接收與更新狀態
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
