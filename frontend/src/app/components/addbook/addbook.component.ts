import { Component, OnInit } from '@angular/core';
import {Views} from "src/app/viewmodels/view.viewmodel"
import {BooksService} from "src/app/services/books.service";
import {Router} from "@angular/router"
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
books:any=[];
  constructor(private booksService:BooksService, private router:Router) { }

  ngOnInit() {
    this.getBooksFromService();
  }
  getBooksFromService(){
    this.booksService.getBooks().subscribe((response)=>{
      this.books=response;
    })
  }
  deleteBooksFromService(book){
    this.booksService.deleteBook(book).subscribe((response)=>{
      this.books=response;
      alert('data deleted')
      this.getBooksFromService();
    })
  }
  addBooksToService(shelfnumber, Nameofbook, Author, Edition, DVDCD, Description, Barcode){
    this.booksService.addBook(shelfnumber, Nameofbook, Author, Edition, DVDCD, Description, Barcode).subscribe((response)=>{
      this.books=response;
      this.getBooksFromService();
     
    })
  }
  goToBooksEditComponent(_id){
    alert(_id);
    this.router.navigate(['/edit/'+_id]);
  }

}
