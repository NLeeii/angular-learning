// service 就是另一種 class

import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

// 需要先註冊這個service class，才能在其他檔案被inject
@Injectable({providedIn: 'root'})

// 執行一些操作、管理一或多個組件需要的數據
export class TasksService { // class 就是一個object的blueprint，為了交互及使用各種在class裡的方法，需要先實體化這個object
  private tasks = [
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


  // 儲存資料到localstorage 
  constructor() {
    const tasks = localStorage.getItem('tasks'); // localstorage只能儲存"string"

    if(tasks) {
      this.tasks = JSON.parse(tasks); // JSON.parse()->字串轉物件
    }
  }


  // 取得用戶專屬任務
  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
    // filter()會回傳一個"新陣列"，且回傳值型別"永遠是陣列"，就算找不到值的時候也會回傳空陣列[]，不會回傳undefined
    // find()則是會回傳"單一元素"（可能是物件、字串、數字等，取決於你陣列裡裝什麼），找不到時回傳undefined
  }

  addTask(taskData: NewTaskData, userId: string) {
    // taskData裡拿得到的資料可以直接拿，沒有的項目像:id、userId再隨機生成、指派一下
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    // 直接比對整個任務列表，id相同則會直接被篩選掉，達到刪除的效果
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  // 更新最新任務到localstorage
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}