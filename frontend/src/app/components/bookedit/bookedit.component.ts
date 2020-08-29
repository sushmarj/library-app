import { Component, OnInit } from '@angular/core';
import {BooksService} from "src/app/services/books.service";
import {Router, ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {
   
      constructor(private booksService:BooksService, private router:Router, private activatedRoute:ActivatedRoute) { }
bookObject:any={
    shelfnumber:" ",
    Nameofbook:" ",
    Author:" ",
    Edition:" ",
    DVDCD:" ",
    Description:" ",
    Barcode:" "

};    
      ngOnInit() {
          let _id=this.activatedRoute.snapshot.paramMap.get("_id");
          this.booksService.getBookById(_id).subscribe((response)=>{
              this.bookObject=response;
          })
      }
      save(){
          this.booksService.updateBookById(this.bookObject._id, this.bookObject).subscribe((response)=>{
              alert("data updated");
              this.router.navigate(['/addbook']);
          })
      }
      cancel(){
          this.router.navigate(['/addbook']);
      }
    }