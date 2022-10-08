import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url= "http://localhost:8080";

  constructor(private http: HttpClient) { }
  
  login(loginData:any){
    return this.http.post(this.url+"/bookstore/user/login?email="+loginData.email+"&password="+loginData.password,"");
  }

  signUp(signUpData:any){
    return this.http.post(this.url+"/bookstore/user/register",signUpData);
  }
}
