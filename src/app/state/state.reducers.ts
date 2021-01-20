import { createReducer, on, ActionReducerMap, Action } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { IUser, IProfile } from './../core/interfaces/users.interfaces';
import { GetUsersSuccess, GetProfilesSuccess } from './state.actions';

export interface UsersState {
  users: IUser[];
  profiles: IProfile[];
}

export const initialState: UsersState = {
  users: undefined,
  profiles: undefined,
};

export const usersReducers = createReducer(
  initialState,
  on(GetUsersSuccess, (state, action) => ({ ...state, users: action.payload })),
  on(GetProfilesSuccess, (state, action) => ({
    ...state,
    profiles: action.payload,
  })),
);

export interface State {
  users: UsersState;
}

export const reducers = {
  users: usersReducers,
};

export const APP_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'App Reducers',
  {
    factory: () => reducers,
  },
);
