import { Action } from '@ngrx/store';

export const ActionTypes = {
  AUTHORIZE: 'AUTHORIZE',
  UNAUTHORIZE: 'UNAUTHORIZE'
}

export class AuthorizeAction implements Action {
  type = ActionTypes.AUTHORIZE
}

export class UnAuthorizeAction implements Action {
  type = ActionTypes.UNAUTHORIZE
}