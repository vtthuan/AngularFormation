import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IUser } from './user';
import { IUserNew } from './user-new';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3000/users';
  private userUrlDetail = 'http://localhost:3000/user/';

  userAddUrl = 'http://localhost:3000/newuser';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<object[]> {
    return of(
      [
        {
          key : 'CDP',
          value : 'Chef de projet'
        },
        {
          key : 'ARC',
          value : 'Architecte'
        },
        {
          key : 'DEV',
          value : 'Développeur'
        },
        {
          key : 'REC',
          value : 'Testeur'
        }
      ]);
  }

  getUsers(): Observable<IUser[]> {
    console.log(' REST URL: ' + this.userUrl);

    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => console.log(' All Users: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUser(id: string): Observable<IUser> {
    console.log(' REST URL: ' + this.userUrlDetail + id);

    return this.http.get<IUser>(this.userUrlDetail + id).pipe(
      tap(data => console.log(' User: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  postNewUser(newUSer: IUserNew): Observable<any> {

    return this.http.post(this.userAddUrl, newUSer);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `Erreur client: ${err.message}`;
    } else {
      errorMessage = `Erreur serveur REST code: ${err.status}, message: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
