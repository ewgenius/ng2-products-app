import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import { UnAuthorizeAction } from '../../actions/auth';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<root.State>) { }

  ngOnInit() {
  }

  add() {

  }

  unAuthorize() {
    this.store.dispatch(new UnAuthorizeAction())
  }
}
