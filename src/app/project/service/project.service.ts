import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  get url() {
    return this.baseUrl + '/users';
  }

  getUrlId(id: string) {
    return this.baseUrl + '/users/' + id;
  }

  getUsers() {
    return this.http.get<UserType>(this.url);
  }

  getProject(id: string) {
    return this.http.get<UserType>(this.getUrlId(id));
  }
}
