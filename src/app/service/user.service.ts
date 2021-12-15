import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserList,IUser } from './user'

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  usersList(): Observable<IUserList> {
    return this.httpClient.get<IUserList>("https://reqres.in/api/users");
  }
  userDetail(){

  }
  register(){

  }

  login(){

  }
  delete(){

  }
}
