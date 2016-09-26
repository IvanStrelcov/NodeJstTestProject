import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router }      from '@angular/router';

@Injectable()
export class CanActivateUserService implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router) {}

  canActivate() {
    if (!this._authService.isLoggedIn()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
