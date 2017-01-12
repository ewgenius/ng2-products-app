import { Action } from '@ngrx/store';
import { Product } from '../models/Product'

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT'
}

export class AddProductAction implements Action {
  type = 'TEST';

  constructor(public payload: Product) { }
}

export class Test implements Action {
  type = ActionTypes.ADD_PRODUCT;
  
  constructor() { }
}