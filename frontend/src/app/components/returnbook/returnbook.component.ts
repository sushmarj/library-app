import { Component, OnInit } from '@angular/core';
import { ReturnService } from 'src/app/services/return.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
  return:any=[];
  constructor(private router:Router, private returnService:ReturnService) { }

  ngOnInit() {
    this.getReturnFromService();
  }
  getReturnFromService(){
    this.returnService.getReturn().subscribe((response)=>{
      this.return=response;
    })
  }
  
  addReturnToService( Nameofbook,Barcode, DVDCD,Employeeid,ReturnDate){
    this.returnService.addReturn( Nameofbook,Barcode, DVDCD,Employeeid,ReturnDate).subscribe((response)=>{
      this.return=response;
      this.getReturnFromService();
    })
  }
  

}
