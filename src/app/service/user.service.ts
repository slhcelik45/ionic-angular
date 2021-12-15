import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserList,IUser } from './user'

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {

    userList() {
      return this.httpClient.get('https://reqres.in/api/users').pipe()
    }
    userDetail():Observable<IUser>{
      const url=`https://reqres.in/api/unknown/2`
       return this.httpClient.get(url).pipe(
         map((body:IUser)=>{
           return body;
         });
       )
    }
    userCreate(){

    }
    userUpdate(){

    }
    userDelete (){

    }
  }
}
