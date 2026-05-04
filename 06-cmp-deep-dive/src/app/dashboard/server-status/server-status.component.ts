import { Component, OnDestroy, OnInit } from '@angular/core';

type StatusType = 'online' | 'offline' | 'unknown';

// 裝飾器(@Component)和它要裝飾的 Class 之間，不能存在任何其他的程式碼，裝飾器的作用是「標註緊接在它下方的那個類別」
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css' 
})

// implements (實作)，TypeScript (以及很多物件導向語言) 的標準語法。原生JS沒有
// 可以 implements 無數個 interface(規格的概念)
export class ServerStatusComponent implements OnInit, OnDestroy {
  // currentStatus:'online' | 'offline' | 'unknown' = 'offline';
  currentStatus: StatusType = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  
  constructor(){}

  // 在這裡進行主要的組件"初始化"工作，不要在constructor()中執行任何複雜的組件初始化或設置工作!
  // ngOnInit會等到組件所有input都接收到訊息才初始化，constructor()不會，還沒得到的值會直接顯示undefined
  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
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

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
