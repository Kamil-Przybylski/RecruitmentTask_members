import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from 'src/app/state/state.reducers';
import { GetUsers } from 'src/app/state/state.actions';
import { getUsersWithProfile } from './../../../../state/state.selectors';
import { IUserWithProfile } from '../../../../core/interfaces/users.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Users</h1>

    <a [routerLink]="['/', 'user', 'new']">
      <h2>Go to user create</h2>
    </a>

    <ul *ngFor="let user of usersWithProfile$ | async">
      <li class="user">
        <app-user-item [user]="user"></app-user-item>
      </li>
    </ul>
  `,
})
export class UsersListComponent implements OnInit {
  // users$: Observable<IUser[]> = this.store.pipe(select(getUsers));
  usersWithProfile$: Observable<IUserWithProfile[]> = this.store.pipe(
    select(getUsersWithProfile),
  );

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }
}
