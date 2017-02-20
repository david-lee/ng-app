import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private localStorage: LocalStorageService) {
  }

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.localStorage.set('loggedInUser', user);
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.localStorage.remove('loggedInUser');
  }

  // if user logged in and the token is still valid then return true
  isLoggedIn(): boolean {
    let userItem = this.localStorage.get('loggedInUser') || {};
    let token = userItem.token;

    // TODO check token expiration
    return !!token;
  }

  // TODO update token periodically
  refreshToken() {
  }
}