import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // Template Variables - Angular提供
  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
  }

  // ngModel 用法
  // @Input() title!: string;
  // onSubmit() {
  //   console.log(this.title);
  // }
}
