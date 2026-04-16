import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root', // 在 HTML 中使用的標籤名稱
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html', // 定義元件的HTML
  styleUrl: './app.component.css', // 定義元件的CSS。style 寫陣列樣式;styleUrls 指定外部 css 檔案路徑陣列
})
export class AppComponent {}
