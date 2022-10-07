import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  expandCustomerDeratils: boolean =false; 
  expandOrderSummery: boolean = false;

  constructor( private router: Router) { }

  ngOnInit(): void {    
  }

  checkoutOrder(){
    this.router.navigate(["order-success"])
  }

}
