import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any = [];
  cartBookIdList: any = [];
  token: string | null = "";
  cartBookCount: number = 0;
  @Input() reloadevent: any;

  constructor(private bookService: BookService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getAllbooks();
    this.getCartBooks();
  }

  getAllbooks() {
    this.bookService.getAllbooks().subscribe((responce: any) => {
      this.books = responce.data;
      console.log(this.books);
    })
  }
  getCartBooks() {
    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      this.cartService.getUsercart(this.token).subscribe((responce: any) => {
        this.cartBookIdList = responce.data.bookIdList;
        this.cartBookCount = this.cartBookIdList.length;
      })
    } else {
      this.cartBookIdList = [];
      this.cartBookCount = 0;
    }
  }

  addBookToCart(bookId: number) {
    console.log(bookId);

    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      console.log(this.token);

      this.cartService.addBook(this.token, bookId).subscribe((responce: any) => {
        console.log(responce);
        this.ngOnInit();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }
}
