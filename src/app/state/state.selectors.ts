import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from 'src/app/state/state.reducers';

const getState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getState, (state) => state.users);

export const getProfiles = createSelector(getState, (state) => state.profiles);

export const getUsersWithProfile = createSelector(
  getUsers,
  getProfiles,
  (users, profiles) => {
    if (!(users?.length && profiles?.length)) return [];

    return users?.map((user) => {
      const userProfile = profiles.find(profile => profile.userId === user.id);
      return { ...user, profile: userProfile };
    });
  },
);
