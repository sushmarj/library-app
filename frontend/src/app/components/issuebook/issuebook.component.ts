import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {
employees:any=[];
  constructor(private router:Router, private employeesService:EmployeesService) { }

  ngOnInit() {
    this.getEmployeesFromService();
  }
  getEmployeesFromService(){
    this.employeesService.getEmployees().subscribe((response)=>{
      this.employees=response;
    })
  }
  
  addEmployeesToService( Nameofbook, Author, Edition, DVDCD, Date,Employeeid,Employeename,Employeeemail,Phonenumber){
    this.employeesService.addEmployees( Nameofbook, Author, Edition, DVDCD, Date,Employeeid,Employeename,Employeeemail,Phonenumber).subscribe((response)=>{
      this.employees=response;
      this.getEmployeesFromService();
    })
  }
  

}
