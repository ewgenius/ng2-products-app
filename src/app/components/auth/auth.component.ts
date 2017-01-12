import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as root from '../../reducers';
import * as auth from '../../actions/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(
    private store: Store<root.State>,
    private router: Router
  ) { }

  authorize() {
    this.store.dispatch(new auth.AuthorizeAction({
      username: this.username,
      password: this.password
    }));
  }
}
