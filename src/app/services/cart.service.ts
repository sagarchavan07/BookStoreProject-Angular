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
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.get(this.url + "/bookstore/cart/userCart", { headers: header })
    } else throw Error("token not found");
  }
  addBook(token: string | null, bookId: number) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.post(this.url + "/bookstore/cart/addBook/" + bookId, "", { headers: header })
    } else throw Error("token not found");
  }
  removeBook(token: string | null, bookId: number) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.delete(this.url + "/bookstore/cart/removeBook/" + bookId, { headers: header })
    } else throw Error("token not found");
  }

  updateCart(token: string | null, usercart: any){
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.put(this.url + "/bookstore/cart/update/",usercart, { headers: header })
    } else throw Error("token not found");
  }
}
