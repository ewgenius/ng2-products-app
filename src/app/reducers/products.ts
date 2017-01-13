import { Product } from '../models/Product';
import { ActionTypes, AddProductAction } from '../actions/product'

export interface State {
  ids: string[]
  items: { [id: string]: Product }
  selectedId: string | null
}

const initialState: State = {
  ids: [],
  items: {},
  selectedId: null
};

export function reducer(state = initialState, action: AddProductAction): State {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      console.log(action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getProducts = (state: State) => state.items
export const getProductIds = (state: State) => state.ids