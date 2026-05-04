import { Component } from '@angular/core';

type StatusType = 'online' | 'offline' | 'unknown';

// 裝飾器(@Component)和它要裝飾的 Class 之間，不能存在任何其他的程式碼，裝飾器的作用是「標註緊接在它下方的那個類別」
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css' 
})


export class ServerStatusComponent {
  // currentStatus:'online' | 'offline' | 'unknown' = 'offline';
  currentStatus: StatusType = 'offline';

  constructor() {
    setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999
      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
