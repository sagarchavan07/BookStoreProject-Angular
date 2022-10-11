import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string | null = null;
  profileTabFlag: boolean = false;
  @Input() cartCount: any;
  @Output() reloadComponent = new EventEmitter<boolean>();;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
  }

  openLogin() {
    this.router.navigate(["user-auth"]);
  }

  openProfileTab() {
    this.profileTabFlag = (this.profileTabFlag == true) ? false : true
  }

  openCart() {
    this.router.navigate(["cart"]);
  }

  openHome() {
    this.router.navigate(["home"]);
  }

  logout() {
    localStorage.removeItem("token");
    this.profileTabFlag = false;
    this.reloadComponent.emit(true);
    this.router.navigate(["home"]);
  }
}
