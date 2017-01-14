import { Action } from '@ngrx/store';
import { Product } from '../models/Product';

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  SELECT_PRODUCT: 'SELECT_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_SUCCESS: 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAIL: 'LOAD_PRODUCTS_FAIL'
};

export class AddProductAction implements Action {
  type = ActionTypes.ADD_PRODUCT;

  constructor(public payload: Product) { }
}

export class SelectProductAction implements Action {
  type = ActionTypes.SELECT_PRODUCT;

  constructor(public payload: { id: string }) { }
}

export class EditProductAction implements Action {
  type = ActionTypes.EDIT_PRODUCT;

  constructor(public payload: Product) { }
}

export class DeleteProductAction implements Action {
  type = ActionTypes.DELETE_PRODUCT;

  constructor(public payload: { id: string }) { }
}

export class LoadProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS;

  constructor() { }
}

export class LoadSucessProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) { }
}

export class LoadFailProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) { }
}

