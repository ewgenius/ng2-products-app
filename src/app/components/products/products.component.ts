import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MdDialog } from '@angular/material';
import * as root from '../../reducers';
import { Product } from '../../models/Product';
import { UnAuthorizeAction } from '../../actions/auth';
import { DeleteProductAction } from '../../actions/product';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Observable<Product[]>;

  constructor(
    private store: Store<root.State>,
    private dialog: MdDialog,
    private router: Router
  ) {
    this.products = this.store.select(root.getProducts);
  }

  unAuthorize() {
    this.store.dispatch(new UnAuthorizeAction());
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductDialogComponent);
    dialogRef.afterClosed();
  }

  selectProduct(id: string) {
    this.router.navigate([`products/${id}`]);
  }

  editProduct(id: string) {
    this.router.navigate([`products/${id}/edit`]);
  }

  deleteProduct(id: string) {
    this.store.dispatch(new DeleteProductAction({ id }));
  }
}
