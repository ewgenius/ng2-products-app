import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import { Product } from '../../models/Product'
import { Observable } from 'rxjs'
import { UnAuthorizeAction } from '../../actions/auth';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productIds: Observable<string[]>;
  products: Observable<{ [id: string]: Product }>;

  constructor(private store: Store<root.State>) {
    this.products = store.select(root.getProducts);
    this.productIds = store.select(root.getProductIds);
  }

  unAuthorize() {
    this.store.dispatch(new UnAuthorizeAction());
  }
}
