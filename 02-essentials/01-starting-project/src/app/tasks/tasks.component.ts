import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  // getter
  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId); 
    // filter()會回傳一個"新陣列"，且回傳值型別"永遠是陣列"，就算找不到值的時候也會回傳空陣列[]，不會回傳undefined
    // find()則是會回傳"單一元素"（可能是物件、字串、數字等，取決於你陣列裡裝什麼），找不到時回傳undefined
  }
  
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id); // 直接比對整個任務列表，id相同則會直接被篩選掉，達到刪除的效果
  }

  isAddingTask = false;
  // clicked?: boolean;

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
