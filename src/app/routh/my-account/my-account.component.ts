import { Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { UserService } from '../../features/user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [BasicLayoutComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

  constructor(private userService:UserService,private router:Router){}
accountLogOut() {
this.userService.logout();
this.router.navigate(['/home']);
}

}
