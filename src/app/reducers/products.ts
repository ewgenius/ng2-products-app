import { Product } from '../models/Product';
import {
  ActionTypes,
  AddProductAction,
  SelectProductAction,
  EditProductAction,
  DeleteProductAction,
  LoadSucessProductsAction
} from '../actions/product';

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

type ProductAction = AddProductAction | SelectProductAction | EditProductAction | DeleteProductAction | LoadSucessProductsAction;

export function reducer(state = initialState, action: ProductAction): State {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const created = (action as AddProductAction).payload;
      const newId = String(state.ids.reduce((max, i) => Math.max(max, Number(i)), 0) + 1);
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
    case ActionTypes.DELETE_PRODUCT: {
      const id = (action as DeleteProductAction).payload.id;
      const index = state.ids.indexOf(id);
      return Object.assign({}, state, {
        ids: [...state.ids.slice(0, index), ...state.ids.slice(index + 1)],
        items: Object.assign({}, state.items, {
          [id]: undefined
        })
      });
    }
    case ActionTypes.LOAD_PRODUCTS_SUCCESS: {
      const products = (action as LoadSucessProductsAction).payload;
      return Object.assign({}, state, {
        ids: products.map(product => product.id),
        items: products.reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, {})
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
