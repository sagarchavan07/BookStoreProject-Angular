import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueShopping(){
    this.router.navigate(["home"]);
  }
}
