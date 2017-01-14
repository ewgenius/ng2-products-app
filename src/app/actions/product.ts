import { Action } from '@ngrx/store';
import { Product } from '../models/Product';

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAIL: 'ADD_PRODUCT_FAIL',
  SELECT_PRODUCT: 'SELECT_PRODUCT',
  SELECT_PRODUCT_SUCCESS: 'SELECT_PRODUCT_SUCCESS',
  SELECT_PRODUCT_FAIL: 'SELECT_PRODUCT_FAIL',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
  EDIT_PRODUCT_FAIL: 'EDIT_PRODUCT_FAIL',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAIL: 'DELETE_PRODUCT_FAIL',
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  LOAD_PRODUCTS_SUCCESS: 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAIL: 'LOAD_PRODUCTS_FAIL'
};

export class AddProductAction implements Action {
  type = ActionTypes.ADD_PRODUCT;

  constructor(public payload: Product) { }
}

export class AddProductSuccessAction implements Action {
  type = ActionTypes.ADD_PRODUCT_SUCCESS;

  constructor(public payload: Product) { }
}

export class AddProductFailAction implements Action {
  type = ActionTypes.ADD_PRODUCT_FAIL;

  constructor(public payload: any) { }
}

export class SelectProductAction implements Action {
  type = ActionTypes.SELECT_PRODUCT;

  constructor(public payload: { id: number }) { }
}

export class SelectProductSuccessAction implements Action {
  type = ActionTypes.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) { }
}

export class SelectProductFailAction implements Action {
  type = ActionTypes.SELECT_PRODUCT_FAIL;

  constructor(public payload: any) { }
}

export class EditProductAction implements Action {
  type = ActionTypes.EDIT_PRODUCT;

  constructor(public payload: Product) { }
}

export class EditProductSuccessAction implements Action {
  type = ActionTypes.EDIT_PRODUCT_SUCCESS;

  constructor(public payload: Product) { }
}

export class EditProductFailAction implements Action {
  type = ActionTypes.EDIT_PRODUCT_FAIL;

  constructor(public payload: any) { }
}

export class DeleteProductAction implements Action {
  type = ActionTypes.DELETE_PRODUCT;

  constructor(public payload: { id: number }) { }
}

export class DeleteProductSuccessAction implements Action {
  type = ActionTypes.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: { id: number }) { }
}

export class DeleteProductFailAction implements Action {
  type = ActionTypes.DELETE_PRODUCT;

  constructor(public payload: any) { }
}

export class LoadProductsAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS;

  constructor() { }
}

export class LoadProductsSuccessAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) { }
}

export class LoadProductsFailAction implements Action {
  type = ActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) { }
}

