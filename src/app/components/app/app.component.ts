import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import { LoadProductsAction } from '../../actions/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<root.State>,
    private router: Router
  ) {
    this.store.select(root.getAuthorized).subscribe(authorized => {
      if (authorized) {
        this.router.navigate(['products']);
      } else {
        this.router.navigate(['']);
        this.store.dispatch(new LoadProductsAction());
      }
    });
  }
}
