import { Component, Input } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { LogComponent } from "../../shared/log/log.component";

@Component({
  selector: 'app-log-page',
  standalone: true,
  imports: [BasicLayoutComponent, LogComponent],
  templateUrl: './log-page.component.html',
  styleUrl: './log-page.component.css'
})
export class LogPageComponent {
  loginTitle:string ="Sign In";
  registerTitle:string ="Sign Up";
  active:boolean;
  loginMessage:string="Welcome Back";
  registerMessage:string="Hello Friend!";
  loginDescription:string ="Enter your personal details to use all of site features.";
  registerDescription:string ="Register with your personal details to use all of site features.";

  onIsActiveChangeLogin(isActive: boolean) {
    this.active = isActive; 
  }
  onIsActiveChangeRegister(isActive: boolean) {
    this.active = !isActive;
  }
}
