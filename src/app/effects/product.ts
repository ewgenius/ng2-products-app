import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { Product } from '../models/Product';
import * as product from '../actions/product';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private db: Database) { }
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('products_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.LOAD_PRODUCTS)
    .startWith(new product.LoadProductsAction())
    .switchMap(() =>
      this.db.query('products')
        .toArray()
        .map((products: Product[]) => new product.LoadSucessProductsAction(products))
        .catch(error => of(new product.LoadFailProductsAction(error)))
    );

}
