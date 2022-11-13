import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../model/userdto';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService{
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'Account';
  }

  public signup(user: UserDto): Observable<any>{
    return this.http.post<any>(this.rootUrl + '/SignUp', user)
  }

  public signin(user: UserDto): Observable<string>{
    return this.http.post(this.rootUrl + '/SignIn', user, {
      responseType: 'text',
    });
  }

}
