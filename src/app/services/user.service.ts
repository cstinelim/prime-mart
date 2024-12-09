import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _username: string = '';

  setUsername(username: string) {
    this._username = username;
  }

  getUsername() {
    return this._username;
  }
}
