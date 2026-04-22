import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); // <void>是個特殊type，表示不會emit出任何數據

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // signal & two-way-binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.cancel.emit(); // 上面標示了<void>，因此cancel可以emit一個"不攜帶任何數據"的事件
  }
}
