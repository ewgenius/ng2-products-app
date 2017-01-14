import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import * as auth from '../../actions/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(
    private store: Store<root.State>
  ) { }

  authorize() {
    this.store.dispatch(new auth.AuthorizeAction({
      username: this.username,
      password: this.password
    }));
  }
}
