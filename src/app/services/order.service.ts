import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = "http://localhost:8080/bookstore/orders";

  constructor(private http: HttpClient) { }

  placeOrder(token: string|null, orderData: any) {
    if (token != null) {
      let header = new HttpHeaders().set("Authorization", token);
      return this.http.post(this.url+"/placeOrder/", orderData, { headers: header });
    }else throw console.error("token not found");
  }
}
