import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../../features/user/service/user.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor(private userService:UserService,private router:Router){}
logout() {
  this.userService.logout();
  this.router.navigate(['/home']);
}

  
}
