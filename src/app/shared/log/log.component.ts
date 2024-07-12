import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../features/user/service/user.service';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent{
logForm:FormGroup

@Input() title: string;
@Input() submitTask: string;
@Input() buttonTask: string;
@Input() reverseMessage: any;
@Input() reverseDescription: any;

@Output() isActiveChange = new EventEmitter<boolean>();
@Input() isActive:boolean=false;
constructor(private fb:FormBuilder,private userService:UserService){
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
if(this.isActive){
  this.userService.register(this.logForm.value).subscribe();
}else{
  this.userService.login(this.logForm.value).subscribe();
}
}
}
