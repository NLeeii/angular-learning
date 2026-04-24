import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent], // 只會出現在最根部的 module
  imports: [BrowserModule, SharedModule, TasksModule], // for standalone components / other modules
  // BrowserModule：Angular 內建部門，提供瀏覽器渲染所需的基本功能（如 ngIf, ngFor）
  // FormsModule：Angular 內建部門，提供表單處理功能。
})

export class AppModule {}