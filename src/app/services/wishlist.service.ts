import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8080/bookstore/wishlist"; 

  getUserWishlist(token: string | null) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.get(this.url + "/get", { headers: header })
    } else throw Error("token not found");
  }
  addBook(token: string | null, bookId: number) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.post(this.url + "/addbook/" + bookId, "", { headers: header })
    } else throw Error("token not found");
  }
  removeBook(token: string | null, bookId: number) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.delete(this.url + "/delete/" + bookId, { headers: header })
    } else throw Error("token not found");
  }
}
