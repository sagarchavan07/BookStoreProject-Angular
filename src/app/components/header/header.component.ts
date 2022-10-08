import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token:string | null = "";
  @Input() cartCount: any;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  openProfile() {
    this.router.navigate(["user-auth"]);
  }

  openCart() {
    this.router.navigate(["cart"]);
  }

  openHome(){
    this.router.navigate(["home"]);    
  }
}
