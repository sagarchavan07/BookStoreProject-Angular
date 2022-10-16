import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/user-data';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  expandCustomerDeratils: boolean = false;
  expandOrderSummery: boolean = false;
  token: string | null = "";
  userCart: any = "";
  user: UserData = {
    name: "", email: "", password: "", mobileNumber: null, isAdmin: 'false', address: "", pinCode: null, locality: "", city: "", landmark: "", customerType: ""
  };
  orderData: any = { bookIdList: [], quantityList: [] };
  showSpinner: boolean = false;

  cartbooks: Array<any> = [];

  constructor(
    private router: Router,
    private cartSrevice: CartService,
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getUserCart();
  }

  placeOrder() {
    this.showSpinner = true;
    this.orderData.bookIdList = this.userCart.bookIdList;
    this.orderData.quantityList = this.userCart.quantities;
    this.orderService.placeOrder(localStorage.getItem("token"), this.orderData).subscribe((responce: any) => {
      this.router.navigate(["order-success"]);
      this.showSpinner = false;
    },(error:any)=>{
      this.showSpinner = false;
      console.log(error);
    })
  }

  decreaseQuantity(bookId: number) {
    let index = this.userCart.bookIdList.indexOf(bookId);
    this.userCart.quantities[index] = this.userCart.quantities[index] - 1;
  }

  increaseQuantity(bookId: number) {
    let index = this.userCart.bookIdList.indexOf(bookId);
    this.userCart.quantities[index] = Number.parseInt(this.userCart.quantities[index]) + 1;
  }

  getCartBooks() {
    if (this.token) {
      this.cartService.getCartBooks(this.token).subscribe((responce:any)=>{
        this.cartbooks = responce.data;      
      })
    }
  }

  getUserCart() {
    if (localStorage.getItem("token") != null) {
      this.token = localStorage.getItem("token");
      this.cartSrevice.getUsercart(this.token).subscribe((responce: any) => {
        this.userCart = responce.data;
        this.getCartBooks();
      })
    } else {
      this.router.navigate(["user-auth"]);
    }
  }

  removeBookFromCart(bookId: number) {
    this.cartService.removeBook(localStorage.getItem("token"), bookId).subscribe((responce: any) => {
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(["cart"]);
      });
    })
  }

  updateCart() {
    this.cartService.updateCart(localStorage.getItem("token"), this.userCart).subscribe((responce: any) => {
      this.expandCustomerDeratils = true;
    })
  }

  getUserData() {
    if (localStorage.getItem("token")) {
      this.userService.getUserData(localStorage.getItem("token")).subscribe((responce: any) => {
        this.user = responce.data
      })
    }
  }

  updateUserData() {
    this.expandOrderSummery = true
    this.userService.updateUserData(localStorage.getItem("token"), this.user).subscribe((responce: any) => {
      this.user = responce.data;
    })
  }

}
