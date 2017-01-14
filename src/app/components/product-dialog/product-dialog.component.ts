import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';
import { Product } from '../../models/Product';
import { AddProductAction } from '../../actions/product';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  constructor(
    private dialogRef: MdDialogRef<ProductDialogComponent>,
    private store: Store<root.State>
  ) { }

  save(product: Product) {
    this.store.dispatch(new AddProductAction(product));
    this.dialogRef.close({});
  }
}
