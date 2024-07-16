import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../features/user/service/user.service';
import { Router } from '@angular/router';
import { TimeDisplayComponent } from "../time-display/time-display.component";

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule, TimeDisplayComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent{
logForm:FormGroup

submit:boolean =false;
color:string;
message:string;

@Input() title: string;
@Input() submitTask: string;
@Input() buttonTask: string;
@Input() reverseMessage: any;
@Input() reverseDescription: any;

@Output() isActiveChange = new EventEmitter<boolean>();
@Input() isActive:boolean=false;
constructor(private fb:FormBuilder,
            private userService:UserService,
            private router:Router,
            private cdr: ChangeDetectorRef){
this.createForm();
}
 
isActived():void {
  this.isActive = !this.isActive;
  this.isActiveChange.emit(this.isActive);
  }
createForm():void{
  this.logForm = this.fb.group({
    email:[''],
    password:[''],
    role:['']
    }
  )
}
onSubmit():void{
const role:string = this.logForm.value["role"];
if(this.isActive){
  this.userService.register(this.logForm.value).subscribe(
    response =>{
      this.userService.saveUserId(response.id);
      this.userService.saveEmail(this.logForm.value["email"]);
      this.userService.saveRole(role);
      //time-display
      this.submit = true;
      this.message = "Kayıt işlemi başarılı şekilde gerçekleşti.";
      this.color = "#07ec16";
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          if(role === "GUEST"){
            this.router.navigate(["/home"]);
          }
          else if(role === "MANAGER"){
            this.router.navigate(["/admin"]);
          }
          this.cdr.detectChanges(); 
        }, 3000);
    },
    (error) =>{
      this.submit = true;
      this.message = "Kayıt işlemi gerçekleşmedi";
      this.color = "red";
      this.cdr.detectChanges(); 
      console.log(error)
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges(); 
        }, 3000);
      }
  );
}else{
  this.userService.login(this.logForm.value).subscribe(
    response =>{
      this.userService.saveUserId(response.id);
      this.userService.saveEmail(this.logForm.value["email"]);
      this.userService.saveRole(role);
      //time-display
      this.submit = true;
      this.message = "Giriş işlemi başarılı şekilde gerçekleşti.";
      this.color = "#07ec16";
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          if(role === "GUEST"){
            this.router.navigate(["/home"]);
          }
          else if(role === "MANAGER"){
            this.router.navigate(["/admin"]);
          }
          this.cdr.detectChanges(); 
        }, 3000);
    },
    (error) =>{
      this.submit = true;
      this.message = "Giriş işlemi gerçekleşmedi";
      this.color = "red";
      console.log(error)
      this.cdr.detectChanges(); 
        setTimeout(() => {
          this.submit = false;
          this.cdr.detectChanges(); 
        }, 3000);
      }
  );
}
}
}
