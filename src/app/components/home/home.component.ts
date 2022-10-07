import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: any = ['book1', 'book2','book3', 'book4', 'book5', 'book6','book7']

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllbooks();
  }

  getAllbooks(){
    this.bookService.getAllbooks().subscribe((responce:any)=>{
      this.books=responce.data;
    })
  }

}
