import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import * as root from '../reducers';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(private store: Store<root.State>) { }

  canActivate() {
    return this.store.select(root.getAuthorized);
  }
}