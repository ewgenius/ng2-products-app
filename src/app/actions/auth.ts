import { Action } from '@ngrx/store';

export const ActionTypes = {
  AUTHORIZE: 'AUTHORIZE',
  UNAUTHORIZE: 'UNAUTHORIZE'
};

export class AuthorizeAction implements Action {
  type = ActionTypes.AUTHORIZE;

  constructor(public payload: {
    username: string,
    password: string
  }) { }
}

export class UnAuthorizeAction implements Action {
  type = ActionTypes.UNAUTHORIZE;
}
