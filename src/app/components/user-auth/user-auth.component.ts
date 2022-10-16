import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/login-data';
import { UserData } from 'src/app/model/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  existingUser: boolean = true;
  loginData: LoginData = { email: "", password: "" };
  signUpData: UserData = {
    name: "", email: "", password: "", mobileNumber: 0, isAdmin: 'false', address: "", pinCode: 0, locality: "", city: "", landmark: "", customerType: ""
  };

  selectedIndex = 0;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  openHome() {
    this.router.navigate(["home"]);
  }

  signUp() {
    this.userService.signUp(this.signUpData).subscribe((responce) => {
      this.snackBar.open("Sign Up Successfull", "dismiss");
      this.router.navigate(["user-auth"]);
      this.selectTab(0);
    })
  }

  login() {
    this.userService.login(this.loginData).subscribe((responce: any) => {
      this.snackBar.open("Login Successfull", "dismiss");
      localStorage.setItem("token", responce.data);
      this.userService.getUserData(localStorage.getItem("token")).subscribe((responce: any) => {
        localStorage.setItem("userName", responce.data.name);
        this.router.navigate(["home"]);
      })
    })
  } Name() {
  }
}
