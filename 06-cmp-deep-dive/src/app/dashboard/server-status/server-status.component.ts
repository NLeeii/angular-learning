import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

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

// export class ServerStatusComponent implements OnInit, OnDestroy {
//   // currentStatus:'online' | 'offline' | 'unknown' = 'offline';
//   currentStatus: StatusType = 'offline';

//   // ReturnType<typeof setInterval> 是一種動態型別推導。
//   // 它的意思是：「讓 TypeScript 自動去抓取 setInterval 執行後會回傳的格式」。
//   private interval?: ReturnType<typeof setInterval>;
  
//   constructor(){}

//   // 在這裡進行主要的組件"初始化"工作，不要在constructor()中執行任何複雜的組件初始化或設置工作!
//   // ngOnInit會等到組件所有input都接收到訊息才初始化，constructor()不會，還沒得到的值會直接顯示undefined
//   ngOnInit() {
//     console.log('ON INIT');
//     // 建立計時器時，會回傳一個專屬ID!
//     // 這裡必須將回傳的「計時器 ID」存進 this.interval 變數中，
//     // 這樣未來才知道要關閉哪一個計時器。
//     this.interval = setInterval(() => {
//       const rnd = Math.random(); // 0 - 0.999999
//       if(rnd < 0.5) {
//         this.currentStatus = 'online';
//       } else if (rnd < 0.9) {
//         this.currentStatus = 'offline';
//       } else {
//         this.currentStatus = 'unknown';
//       }
//     }, 5000);
//     // console.log(this.interval);  // id為3
//   }

//   ngOnDestroy() {
//     // 當元件從畫面上消失時，原本設定好的計時器並不會自動停止。
//     // 必須在這裡手動呼叫 clearInterval，並傳入計時器的 ID，將其強制關閉。
//     clearTimeout(this.interval); 
//     // 或 clearInterval()
//   }

//   ngAfterViewInit() {
//     console.log('AFTER VIEW INIT');
//   }
// }


// DestroyRef
export class ServerStatusComponent implements OnInit {

  currentStatus: StatusType = 'offline';

  private destroyRef = inject(DestroyRef);

  // 在這裡進行主要的組件"初始化"工作，不要在constructor()中執行任何複雜的組件初始化或設置工作!
  // ngOnInit會等到組件所有input都接收到訊息才初始化，constructor()不會，還沒得到的值會直接顯示undefined
  ngOnInit() {
    console.log('ON INIT');
    // 建立計時器時，會回傳一個專屬ID!
    // 這裡必須將回傳的「計時器 ID」存進 this.interval 變數中，
    // 這樣未來才知道要關閉哪一個計時器。
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999
      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
