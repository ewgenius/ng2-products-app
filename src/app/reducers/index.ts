import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as products from './products';
import * as auth from './auth';

export interface State {
  auth: auth.State,
  products: products.State
};

const reducers = {
  auth: auth.reducer,
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

export const getAuthState = (state: State) => state.auth;

export const getAuthorized = createSelector(getAuthState, auth.getAuthorized);