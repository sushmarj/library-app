import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService{
serviceUrl:string="http://localhost:3000/api/Employee/";
  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get(this.serviceUrl);
  }
 
  addEmployees( book, author, edition, dvdcd, date, empid, empname, empemail,phonenumber){
    let newEmployees={ Nameofbook:book, Author:author, Edition:edition, DVDCD:dvdcd, Date:date,Employeeid:empid,Employeename:empname,Employeeemail:empemail,Phonenumber:phonenumber};
    return this.http.post(this.serviceUrl, newEmployees);
  }
  getEmployeeById(_id){
    return this.http.get(this.serviceUrl+_id);
  }
  
}
