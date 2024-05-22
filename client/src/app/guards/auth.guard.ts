import { inject } from '@angular/core';
import { CanActivateFn, Router, CanMatchFn, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if (authService.isAuth()) {
    return true;
  }else{
    const url = router.createUrlTree(['/login']);
    return url;
  }
};
