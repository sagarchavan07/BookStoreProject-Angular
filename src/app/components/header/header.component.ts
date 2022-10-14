import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token: string | null = null;
  profileTabFlag: boolean = false;
  userName: string = "";
  @Input() cartCount: any;
  @Output() reloadComponent = new EventEmitter<boolean>();;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getUserDetails();
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
    this.profileTabFlag = false;
    this.ngOnInit();
    this.reloadComponent.emit(true);
    this.router.navigate(["home"]);
  }

  getUserDetails() {
    if (this.token) {
      this.userService.getUserData(this.token).subscribe((responce: any) => {
        this.userName = responce.data.name;
      })
    }
  }
}
