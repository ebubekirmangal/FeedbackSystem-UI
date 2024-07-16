import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getRole() === "MANAGER") {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};