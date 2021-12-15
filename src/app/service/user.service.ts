import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IUserList, IUser} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  usersList(): Observable<IUserList> {
    return this.httpClient.get<IUserList>("https://reqres.in/api/users");
  }

  userDetail(id: string) {
    const url = `https://reqres.in/api/users/${id}`;
    return this.httpClient.get<IUser>(url);
  }

  register(request: any) {
    return this.httpClient.post<any>("https://reqres.in/api/register", request);
  }

  login(request: any) {
    return this.httpClient.post<any>("https://reqres.in/api/login", request);
  }

  delete() {

  }
}
