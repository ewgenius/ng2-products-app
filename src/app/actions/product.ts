import { Action } from '@ngrx/store';
import { Product } from '../models/Product'

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT'
}

export class AddProductAction implements Action {
  type = ActionTypes.ADD_PRODUCT;

  constructor(public payload: Product) { }
}