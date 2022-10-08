import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getUsercart(token: string | null) {
    if (token != null) {
      let headers = new HttpHeaders().set('Authorization', token);
      return this.http.get(this.url + "/bookstore/cart/userCart", { headers: headers })
    } else throw Error("token not found");
  }
  addBook(token: string | null, bookId: number) {
    if (token != null) {
      let headers = new HttpHeaders().set('Authorization', token);
      return this.http.post(this.url + "/bookstore/cart/addBook/" + bookId,"", { headers: headers })
    } else throw Error("token not found");
  }
}
