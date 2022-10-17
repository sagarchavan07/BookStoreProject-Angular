import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string | null = localStorage.getItem("token");
  profileTabFlag: boolean = false;
  userName: string | null  = localStorage.getItem("userName");
  searchText:string = "";

  @Input() cartCount: any;
  @Output() reloadComponent = new EventEmitter<boolean>();
  @Output() searchValue = new EventEmitter<string>();


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.token= localStorage.getItem("token");
    this.userName= localStorage.getItem("userName");
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

  openWishlist(){
    this.router.navigate(["wishlist"]);    
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    this.profileTabFlag = false;
    this.ngOnInit();
    this.reloadComponent.emit(true);
    this.router.navigate(["home"]);
  }

  inputSearchText(){
    this.searchValue.emit(this.searchText);
  }
}
