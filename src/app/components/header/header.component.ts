import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItensCount: number = 7;

  constructor(private router: Router) { }

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
