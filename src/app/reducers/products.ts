import { Product } from '../models/Product';
import {
  ActionTypes,
  SelectProductSuccessAction,
  AddProductSuccessAction,
  EditProductSuccessAction,
  DeleteProductSuccessAction,
  LoadProductsSuccessAction
} from '../actions/product';

export interface State {
  ids: number[];
  items: { [id: number]: Product };
  selectedId: number | null;
  selected: Product | null;
}

const initialState: State = {
  ids: [],
  items: {},
  selectedId: null,
  selected: null
};

type ProductAction = 
  SelectProductSuccessAction |
  AddProductSuccessAction |
  EditProductSuccessAction |
  DeleteProductSuccessAction |
  LoadProductsSuccessAction;

export function reducer(state = initialState, action: ProductAction): State {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_SUCCESS: {
      const created = (action as AddProductSuccessAction).payload;
      return Object.assign({}, state, {
        ids: [...state.ids, created.id],
        items: Object.assign({}, state.items, {
          [created.id]: Object.assign({}, created, {
            id: created.id
          })
        })
      });
    }
    case ActionTypes.SELECT_PRODUCT_SUCCESS: {
      const selected = (action as SelectProductSuccessAction).payload;
      return Object.assign({}, state, {
        selectedId: selected.id,
        selected
      });
    }
    case ActionTypes.EDIT_PRODUCT_SUCCESS: {
      const edited = (action as EditProductSuccessAction).payload;
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          [edited.id]: edited
        })
      });
    }
    case ActionTypes.DELETE_PRODUCT_SUCCESS: {
      const id = (action as DeleteProductSuccessAction).payload.id;
      const index = state.ids.indexOf(id);
      return Object.assign({}, state, {
        ids: [...state.ids.slice(0, index), ...state.ids.slice(index + 1)],
        items: Object.assign({}, state.items, {
          [id]: undefined
        })
      });
    }
    case ActionTypes.LOAD_PRODUCTS_SUCCESS: {
      const products = (action as LoadProductsSuccessAction).payload;
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
export const getSelectedProduct = (state: State) => state.selected;
