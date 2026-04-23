import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>(); // <void>是個特殊type，表示不會emit出任何數據

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService)

  // signal & two-way-binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.close.emit(); // 上面標示了<void>，因此cancel可以emit一個"不攜帶任何數據"的事件
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.close.emit();
  }
}
