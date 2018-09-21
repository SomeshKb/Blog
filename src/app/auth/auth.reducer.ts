import { Action } from '@ngrx/store';
import {AuthActions, AuthActionTypes} from './auth.actions';
import { UserDetails, TokenResponse } from '../model/User';



export interface AuthState {
  loggedIn: boolean,
  user: TokenResponse
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState,
                            action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case AuthActionTypes.LogoutAction:
        return {
          loggedIn: false,
          user: undefined
        };

    default:
      return state;
  }
}
