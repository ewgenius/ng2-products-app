import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import * as auth from '../../actions/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(
    private store: Store<root.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select(root.getAuthorized).subscribe(authorized => {
      if (authorized)
        this.router.navigate(['products']);
    })
  }

  authorize() {
    this.store.dispatch(new auth.AuthorizeAction({
      username: this.username,
      password: this.password
    }));
  }
}
