import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as root from '../../reducers';
import { SelectProductAction, EditProductAction } from '../../actions/product';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Observable<Product>;
  editable: boolean = false;

  constructor(
    private store: Store<root.State>,
    private location: Location,
    //private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.editable = true;
      this.store.dispatch(new SelectProductAction({
        id: params['id']
      }));
    });
    this.product = this.store.select(root.getSelectedProduct);
  }

  back() {
    console.log('back', this.location);
    this.location.back();
  }

  save(product: Product) {
    this.store.dispatch(new EditProductAction(product));
  }

  edit() {
    this.editable = !this.editable;
    //this.router.navigate(['products',]);
  }

  view() {
    this.editable = !this.editable;
  }
}
