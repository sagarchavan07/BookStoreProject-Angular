import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url= "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllbooks(){        
    return this.http.get(this.url+"/bookstore/get/all");
  }
}
