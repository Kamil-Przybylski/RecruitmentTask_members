import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { concatMap, switchMap, map } from 'rxjs/operators';

import { UsersService } from './../core/services/users.service';
import {
  GetUsers,
  GetUsersSuccess,
  GetProfiles,
  GetProfilesSuccess,
} from './state.actions';
import { State } from './state.reducers';

@Injectable()
export class AppEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUsers),
      switchMap(() =>
        this.usersService
          .getUsers()
          .pipe(concatMap(users => [GetUsersSuccess(users), GetProfiles()])),
      ),
    ),
  );

  getProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetProfiles),
      switchMap(() =>
        this.usersService
          .getProfiles()
          .pipe(map(profiles => GetProfilesSuccess(profiles))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private usersService: UsersService,
  ) {}
}
