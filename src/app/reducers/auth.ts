import { ActionTypes, AuthorizeAction } from '../actions/auth';

export interface State {
  authorized: boolean;
  error: string;
}

const initialState: State = {
  authorized: false,
  error: ''
};

const adminUser = {
  username: 'admin',
  password: 'admin'
};

export function reducer(state = initialState, action: AuthorizeAction): State {
  switch (action.type) {
    case ActionTypes.AUTHORIZE: {
      if (action.payload.username === adminUser.username && action.payload.password === adminUser.password) {
        return {
          authorized: true,
          error: ''
        };
      } else {
        return {
          authorized: false,
          error: 'wrong username or password'
        };
      }
    }
    case ActionTypes.UNAUTHORIZE: {
      return {
        authorized: false,
        error: ''
      };
    }
    default: {
      return state;
    }
  }
}

export const getAuthorized = (state: State) => state.authorized;
