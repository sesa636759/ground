import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (
      this.auth.isAuthenticated && typeof this.auth.isAuthenticated === 'function'
        ? this.auth.isAuthenticated()
        : this.auth.isAuthenticated
    ) {
      return true;
    } else {
      sessionStorage.setItem('redirectUrl', state.url);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
