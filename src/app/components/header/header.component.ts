import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token:string | null = localStorage.getItem("token");
  profileTabFlag: boolean = false;
  @Input() cartCount: any;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  openLogin() {
    this.router.navigate(["user-auth"]);
  }

  openProfileTab(){    
    this.profileTabFlag = (this.profileTabFlag == true) ? false : true
  }

  openCart() {
    this.router.navigate(["cart"]);
  }

  openHome(){
    this.router.navigate(["home"]);    
  }

  logout(){
    localStorage.removeItem("token");
    this.profileTabFlag = false;
    this.ngOnInit();

  }
}
