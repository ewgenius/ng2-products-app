import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MdDialog } from '@angular/material';
import * as root from '../../reducers';
import { Product } from '../../models/Product';
import { UnAuthorizeAction } from '../../actions/auth';
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
    this.products = store.select(root.getProducts);
  }

  unAuthorize() {
    this.store.dispatch(new UnAuthorizeAction());
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  selectProduct(id: string) {
    this.router.navigate([`products/${id}`]);
  }

  editProduct(id: string) {
    this.router.navigate([`products/${id}/edit`]);
  }
}
