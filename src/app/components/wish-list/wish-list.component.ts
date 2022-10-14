import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  token: string | null = null;
  wishlist: any = "";
  wishlistBooks: Array<any> = [];

  constructor(private router: Router, private wishlistService: WishlistService, private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getWishlist();
  }

  getWishlist() {
    if (this.token) {
      this.wishlistService.getUserWishlist(this.token).subscribe((response:any)=>{
        this.wishlist = response.data;
        this.getCartBookDetails();
      })
    } else this.router.navigate(["request-login"]);
  }

  getCartBookDetails(){
    this.wishlistBooks = [];
    for (let i = 0; i < this.wishlist.bookIdList.length; i++) {
      if (this.token) {
        this.bookService.getBookById(this.wishlist.bookIdList[i],this.token).subscribe((response:any)=>{
          this.wishlistBooks.push(response.data)
        })
      } else this.router.navigate(["request-login"]); 
    }
  }
  addBookToCart(bookId: number){
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.cartService.addBook(this.token, bookId).subscribe((responce: any) => {
        this.removeBookFromWishlist(bookId);
        this.ngOnInit();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }
  removeBookFromWishlist(bookId: number){
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.wishlistService.removeBook(this.token, bookId).subscribe((responce: any) => {
        this.ngOnInit();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }
}
