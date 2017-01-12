import { ActionTypes, AuthorizeAction } from '../actions/auth'

export interface State {
  authorized: boolean
}

const initialState: State = {
  authorized: false
}

export function reducer(state = initialState, action: AuthorizeAction): State {
  switch (action.type) {
    case ActionTypes.AUTHORIZE: {
      return {
        authorized: true
      }
    }
    case ActionTypes.UNAUTHORIZE: {
      return {
        authorized: false
      }
    }
    default: {
      return state
    }
  }
}

export const getAuthorized = (state: State) => state.authorized