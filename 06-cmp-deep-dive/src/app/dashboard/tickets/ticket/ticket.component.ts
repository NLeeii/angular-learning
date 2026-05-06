import { Component, EventEmitter, input, Output, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  // closeTicket = output<void>();
  @Output() closeTicket = new EventEmitter;


  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());

    // signal update method
    // 自動將舊的signal值作為參數傳遞
    this.detailsVisible.update((wasVisible) => !wasVisible ); 
  }

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }
}
