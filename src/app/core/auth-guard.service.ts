import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let isLoginUrl = url.toLocaleLowerCase().indexOf('/login') >= 0;
    let isLoggedIn = !!this.authService.isTokenValid();

    if (isLoggedIn) {
      if (!isLoginUrl) {
        return true;
      } else {
        // default home page for logged-in users
        this.router.navigate(['/dashboard']);
        return false;
      }
    } else if(isLoginUrl) {
      // for login route it should return true so that it can navigate to login page
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: {},
      fragment: ''
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);

    return false;
  }
}