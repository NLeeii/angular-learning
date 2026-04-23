import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from "src/app/shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  // @Input({required: true}) title!:string;
  // @Input({required: true}) summary!:string;
  // @Input({required: true}) dueDate!:string;

  // input object type
  @Input({required: true}) task!: Task;

  // @Output() complete = new EventEmitter<string>();

  // onCompleteTask() {
  //   this.complete.emit(this.task.id);
  //   console.log('complete');
  // }

  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
