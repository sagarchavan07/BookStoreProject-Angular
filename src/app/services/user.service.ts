import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.url + "/bookstore/user/login", loginData);
  }

  signUp(signUpData: any) {
    return this.http.post(this.url + "/bookstore/user/register", signUpData);
  }

  getUserData(token: string | null) {
    if (token != null) {
      let headers = new HttpHeaders().set('Authorization', token);
      return this.http.get(this.url + "/bookstore/user/getUser/", { headers: headers });
    } else throw console.error("token not found");
  }

  updateUserData(token: string | null, userData: any) {
    if (token != null) {
      let headers = new HttpHeaders().set('Authorization', token);
      return this.http.put(this.url + "/bookstore/user/update/", userData, { headers: headers });
    } else throw console.error("token not found");
  }
}
