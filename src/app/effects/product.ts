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
  loadProducts$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.LOAD_PRODUCTS)
    .startWith(new product.LoadProductsAction())
    .switchMap(() =>
      this.db.query('products')
        .toArray()
        .map((products: Product[]) => new product.LoadProductsSuccessAction(products))
        .catch(error => of(new product.LoadProductsFailAction(error)))
    );

  @Effect()
  addProduct$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.ADD_PRODUCT)
    .map((action: product.AddProductAction) => action.payload)
    .mergeMap(p =>
      this.db.insert('products', [p])
        .map(() => new product.AddProductSuccessAction(p))
        .catch(() => of(new product.AddProductFailAction(p)))
    );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.DELETE_PRODUCT)
    .map((action: product.DeleteProductAction) => action.payload)
    .mergeMap(p =>
      this.db.executeWrite('products', 'delete', [p.id])
        .map(() => new product.DeleteProductSuccessAction(p))
        .catch(() => of(new product.DeleteProductFailAction(p)))
    );

  @Effect()
  editProduct$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.EDIT_PRODUCT)
    .map((action: product.EditProductAction) => action.payload)
    .mergeMap(p =>
      this.db.insert('products', [p])
        .map(() => new product.EditProductSuccessAction(p))
        .catch(() => of(new product.EditProductFailAction(p)))
    );

  @Effect()
  selectProduct$: Observable<Action> = this.actions$
    .ofType(product.ActionTypes.SELECT_PRODUCT)
    .map((action: product.SelectProductAction) => action.payload)
    .mergeMap(p =>
      this.db.get('products', p.id)
        .map((v) => new product.SelectProductSuccessAction(v))
        .catch(() => of(new product.SelectProductFailAction(p))));
}
