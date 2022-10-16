import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

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
  wishlistBooks: Array<any> = [];

  constructor(private bookService: BookService, private cartService: CartService, private router: Router, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getAllbooks();
    this.getCartBooks();
    this.getUserWishlist();
  }

  getAllbooks() {
    this.bookService.getAllbooks().subscribe((responce: any) => {
      this.books = responce.data;
    })
  }
  getCartBooks() {
    if (localStorage.getItem("token")) {
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
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.addBook(this.token, bookId).subscribe((responce: any) => {
        this.ngOnInit();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }

  addBookToWishlist(bookId: number) {
    this.wishlistService.addBook(this.token, bookId).subscribe((responce: any) => {
      this.ngOnInit();
    })
  }

  getUserWishlist() {
    if (this.token) {
      this.wishlistService.getUserWishlist(this.token).subscribe((response: any) => {
        this.wishlistBooks = response.data.bookIdList;
      })
    }
  }
}
