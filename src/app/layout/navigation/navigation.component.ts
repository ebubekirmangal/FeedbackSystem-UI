import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../features/user/service/user.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  login:string ="Login";
  logPage:string="/log-page"

  isAdmin:boolean=false;
constructor(private userService:UserService){

}
  ngOnInit(): void {
    this.logButtonControl();
  }

  logButtonControl(){
    if(this.userService.getRole() === "MANAGER"){
      this.login = "Admin Paneli";
      this.logPage="/admin";
    }else{
      if(this.userService.getEmail() !== null){
        this.login = this.userService.getEmail();
        this.logPage="/my-account";
      }else{
        this.login = "Login";
        this.logPage="/log-page";
      }
    }
  }

}
