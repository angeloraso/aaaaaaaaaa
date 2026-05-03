import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IUser } from './interfaces';
import { USERS_KEY } from './constants';

@Injectable({providedIn: 'root'})
export class UsersService {
  readonly http = inject(HttpClient);

  API_URL = 'https://randomuser.me/api/?results=';

  async getUsers(results: number): Promise<Array<any>> {
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
      return Promise.resolve(JSON.parse(users));
    } else {
      const res = await (lastValueFrom(this.http.get(this.API_URL + results)) as Promise<IUser>);
      localStorage.setItem(USERS_KEY, JSON.stringify(res.results));
      return res.results;
    }
  }

  async deleteUser(id: string) {
    const users = localStorage.getItem(USERS_KEY);
    const _users = JSON.parse(users!);
    const index = _users.findIndex((_user: any) => _user.id.value === id);
    if (index !== -1) {
      _users.splice(index, 1);
    }

    localStorage.setItem(USERS_KEY, JSON.stringify(_users))
  }
}
