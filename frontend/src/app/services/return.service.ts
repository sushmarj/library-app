import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReturnService{
serviceUrl:string="http://localhost:3000/api/return/";
  constructor(private http:HttpClient) { }
  getReturn(){
    return this.http.get(this.serviceUrl);
  }
 
  addReturn( book, barcode,dvdcd, empid, date){
    let newReturn={ Nameofbook:book, Barcode:barcode, DVDCD:dvdcd,Employeeid:empid, ReturnDate:date};
    return this.http.post(this.serviceUrl, newReturn);
  }
  getReturnById(_id){
    return this.http.get(this.serviceUrl+_id);
  }
  
}
