import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from "./auth/signup/signup.component";
import { FormComponent } from "./form/form/form.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, SignupComponent, ProfileEditorComponent],
})
export class AppComponent {}
