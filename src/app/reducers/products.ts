import { Product } from '../models/Product';
import { ActionTypes, AddProductAction, SelectProductAction, EditProductAction } from '../actions/product';

export interface State {
  ids: string[];
  items: { [id: string]: Product };
  selectedId: string | null;
}

const initialState: State = {
  ids: [],
  items: {},
  selectedId: null
};

export function reducer(state = initialState, action: AddProductAction | SelectProductAction | EditProductAction): State {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const created = (action as AddProductAction).payload;
      const newId = String(state.ids.length + 1);
      return Object.assign({}, state, {
        ids: [...state.ids, newId],
        items: Object.assign({}, state.items, {
          [newId]: Object.assign({}, created, {
            id: newId
          })
        })
      });
    }
    case ActionTypes.SELECT_PRODUCT: {
      const selected = (action as SelectProductAction).payload;
      return Object.assign({}, state, {
        selectedId: selected.id
      });
    }
    case ActionTypes.EDIT_PRODUCT: {
      const edited = (action as EditProductAction).payload;
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          [edited.id]: edited
        })
      });
    }
    default: {
      return state;
    }
  }
}

export const getProducts = (state: State) => state.ids.map(id => state.items[id]);
export const getProductIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedId;
export const getSelectedProduct = (state: State) => state.items[state.selectedId];
