import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  expandCustomerDeratils: boolean = false;
  expandOrderSummery: boolean = false;
  token: string | null = "";
  cartbookIdList: any = [];
  cartbookQuantityList: any = [];
  cartbooks: any = [];
  cartBookCount: number = 0;

  constructor(private router: Router, private cartSrevice: CartService, private bookService: BookService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getUserCart();
  }

  checkoutOrder() {
    this.router.navigate(["order-success"])
  }

  decreaseQuantity(bookId: number) {
    let index = this.cartbookIdList.indexOf(bookId);
    this.cartbookQuantityList[index] = this.cartbookQuantityList[index] - 1;
    console.log("BookIdList: " + this.cartbookIdList);
    console.log("qtyList: " + this.cartbookQuantityList);
  }

  increaseQuantity(bookId: number) {
    let index = this.cartbookIdList.indexOf(bookId);
    this.cartbookQuantityList[index] = Number.parseInt(this.cartbookQuantityList[index]) + 1;
    console.log("BookIdList: " + this.cartbookIdList);
    console.log("qtyList: " + this.cartbookQuantityList);
  }

  getCartBooks() {
    for (let i = 0; i < this.cartbookIdList.length; i++) {
      this.bookService.getBookById(this.cartbookIdList[i], localStorage.getItem("token")).subscribe((responce: any) => {
        console.log(responce);
        this.cartbooks.push(responce.data);
      });
    }
  }

  getUserCart() {
    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      this.cartSrevice.getUsercart(this.token).subscribe((responce: any) => {
        console.log(responce);
        this.cartbookIdList = responce.data.bookIdList;
        this.cartbookQuantityList = responce.data.quantities;
        this.cartBookCount = this.cartbookIdList.length;
        this.getCartBooks();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }

  removeBookFromCart(bookId: number) {
    this.cartService.removeBook(localStorage.getItem("token"),bookId).subscribe((responce: any)=>{
      console.log(responce);
      this.router.navigateByUrl('/').then(() => {
          this.router.navigate(["cart"]);
      });
    })
  }

}
