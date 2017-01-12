import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as products from './products';

export interface State {
  products: products.State
};

const reducers = {
  products: products.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}