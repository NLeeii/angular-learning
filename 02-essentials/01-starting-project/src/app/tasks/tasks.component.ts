import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

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

  isAddingTask = false;

  // Dependency Injection - 依賴注入
  // tell Angular which type of value you need and Angular creates it and provides it as an argument.
  constructor(private tasksService: TasksService) {}

  // getter
  // 如果這筆資料是「依賴別人的變數（如 @Input）計算出來的」，且那個變數「會一直變」，就一定要用 get。
  // 當你呼叫這個函式的目的是為了「取得運算後的結果」並拿去其他地方用（例如顯示在畫面上），你就必須把那個結果 return (交還) 出來。
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
