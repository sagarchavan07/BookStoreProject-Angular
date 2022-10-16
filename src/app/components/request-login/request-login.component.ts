import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-login',
  templateUrl: './request-login.component.html',
  styleUrls: ['./request-login.component.scss']
})
export class RequestLoginComponent implements OnInit {

  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }

  openLogin(){
    this.router.navigate(["user-auth"])
  }
}
