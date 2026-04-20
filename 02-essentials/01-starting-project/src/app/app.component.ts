import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root', // 在 HTML 中使用的標籤名稱
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html', // 定義元件的HTML
  styleUrl: './app.component.scss', // 定義元件的CSS。style 寫陣列樣式;styleUrls 指定外部 css 檔案路徑陣列
})
export class AppComponent {
  users = DUMMY_USERS;
}
