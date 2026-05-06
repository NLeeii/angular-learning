import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // ==========================================
  // 1. @ViewChild ('form')：【TypeScript 的尋人雷達】
  //    去 HTML 樣板中，尋找身上掛著 `#form` 這個樣板變數 (Template Variable) 名牌的元素。
  //
  // 2. ElementRef：【Angular 的絕緣安全盒】
  //    Angular 為了跨平台安全 (例如在沒有 DOM 的伺服器端渲染時不報錯)，
  //    不會直接把真實的 DOM 交給我們，而是把它包裝在這個 ElementRef 盒子裡。
  //
  // 3. <HTMLFormElement>：【TypeScript 型別提示】
  //    告訴編輯器，這個盒子裡面裝的一定是「表單」，這樣等一下打 `.` 才會自動跳出 reset 等表單專用方法。
  // ==========================================

  // @ViewChild - Angular提供的裝飾器
  // 可以傳遞一個 Template Variable 的名稱 或 component class
  // 使用ViewChild的好處是:隨時隨地都可以操作抓到的DOM元素，不用等事件觸發才能用
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  @Output() add = new EventEmitter<{ title: string; text: string }>();

  // two-way binding
  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.form()?.nativeElement);
  }

  // Template Variables - Angular提供
  onSubmit() {
    // console.log(title);
    // console.log(ticketText);

    // ==========================================
    // 4. this.form：拿到那個被雷達抓回來的安全盒
    // 5. ?：防呆機制，確保盒子存在才繼續往下執行
    // 6. .nativeElement：【打開安全盒】！
    //    這步非常關鍵，打開盒子後拿出的就是「原生的 HTML 實體 DOM」。
    // 7. .reset()：呼叫原生 HTML 表單內建的清空方法。
    // ==========================================
    // this.form().nativeElement.reset();
    
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredTitle = '';
    this.enteredText = '';
  }

  // ngModel 用法
  // @Input() title!: string;
  // onSubmit() {
  //   console.log(this.title);
  // }
}
