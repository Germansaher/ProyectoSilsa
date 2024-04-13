import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataLogin, ResponseLogin } from '../interfaces/DataLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(dataLogin:DataLogin){
    return this.http.post<ResponseLogin>('http://localhost:3000/users/login-admin',dataLogin);
  }

}
