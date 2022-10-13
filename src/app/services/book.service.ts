import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "http://localhost:8080/bookstore";

  constructor(private http: HttpClient) { }

  getAllbooks() {
    return this.http.get<Array<Book>>(this.url + "/get/all");
  }

  getBookById(bookId: number, token: any) {
    if (token != null) {
      let header = new HttpHeaders().set('Authorization', token);
      return this.http.get<any>(this.url + "/get/" + bookId, { headers: header });
    } else throw console.error("invalid token");
    
  }

}
