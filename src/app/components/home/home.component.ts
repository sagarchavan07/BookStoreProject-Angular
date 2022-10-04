import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any = ['book1', 'book2','book3', 'book4', 'book5', 'book6','book7']

  constructor() { }

  ngOnInit(): void {
  }

}
