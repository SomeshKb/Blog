import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';
import {routerReducer} from '@ngrx/router-store';
import { UserDetails } from '../model/User';
import { storeFreeze } from 'ngrx-store-freeze';


export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};





export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
