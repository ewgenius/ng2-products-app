import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor() { }

  canActivate() {
    return false
    //return this.user.isLoggedIn();
  }
}