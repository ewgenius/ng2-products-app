import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import * as auth from '../../actions/auth'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private store: Store<root.State>) { }

  ngOnInit() {
    console.log('init')
  }

  authorize() {
    this.store.dispatch(new auth.AuthorizeAction())
  }
}
