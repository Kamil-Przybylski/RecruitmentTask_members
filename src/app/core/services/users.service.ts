import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { IUser, IProfile } from '../interfaces/users.interfaces';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IUser[]> {
    return this.http.get('/assets/users.data.json').pipe(
      map((response: { users: IUser[] }) => response.users),
      tap(a => console.log(a)),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }

  public getProfiles(): Observable<IProfile[]> {
    return this.http.get('/assets/profiles.data.json').pipe(
      map((response: { profiles: IProfile[] }) => response.profiles),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }
}
