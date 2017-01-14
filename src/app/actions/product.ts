import { Action } from '@ngrx/store';
import { Product } from '../models/Product';

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  SELECT_PRODUCT: 'SELECT_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT'
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
