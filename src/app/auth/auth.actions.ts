import { Action } from '@ngrx/store';
import { UserDetails, TokenResponse } from '../model/User';



export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}


export class Login implements Action {

  readonly type = AuthActionTypes.LoginAction;

  constructor(public payload: {user: TokenResponse}) {
    console.log(payload);
  }
}


export class Logout implements Action {

  readonly type = AuthActionTypes.LogoutAction;


}


export type AuthActions = Login | Logout;
