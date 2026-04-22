import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  // @Input({required: true}) title!:string;
  // @Input({required: true}) summary!:string;
  // @Input({required: true}) dueDate!:string;

  // input object type
  @Input({required: true}) task!: Task;
  // @Input() task?: task;

  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
    console.log('complete');
    
  }

}
