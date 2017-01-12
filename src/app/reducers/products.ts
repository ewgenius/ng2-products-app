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
      return state
    }
    default: {
      return state
    }
  }
}