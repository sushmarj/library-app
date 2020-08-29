import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
serviceUrl:string="http://localhost:3000/api/Books/";
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get(this.serviceUrl);
  }
  deleteBook(book){
   
    return this.http.delete(this.serviceUrl+ book._id);
  }
  addBook(shelf, book, author, edition, dvdcd, desp, _id){
    let newBook={shelfnumber:shelf, Nameofbook:book, Author:author, Edition:edition, DVDCD:dvdcd, Description:desp, Barcode:_id};
    return this.http.post(this.serviceUrl, newBook);
  }
  getBookById(_id){
    return this.http.get(this.serviceUrl+_id);
  }
  updateBookById(_id, NewBookobj){
    return this.http.put(this.serviceUrl+_id, NewBookobj);
  }
  addreturnbook(book,barcode, dvd,empid, rdate){
    let newReturn={Nameofbook:book,Barcode:barcode,DVDCD:dvd,Employeeid:empid, Date:rdate}
    return this.http.post(this.serviceUrl, newReturn);
  }
}
