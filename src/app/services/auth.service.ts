import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL: string = 'https://localhost:44311/api';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newUrl: string = this.API_URL + '/auth/login';

    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newUrl,
      loginModel
    );
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
