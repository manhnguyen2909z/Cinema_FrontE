import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/api/user/ticket.service';
import { BillService } from 'src/app/services/api/user/bookingticket.service';
import { Billdto } from 'src/app/services/model/billdto';
@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css']
})
export class MyTicketComponent implements OnInit {

  constructor(private billservice: BillService ) { }
  // b!: Billdto;

  ngOnInit(): void {
    // this.b = new Billdto();
    // this.billservice.getMyBill().subscribe( (res)=>{
    // //   this.b = res;
    // });
  }

bill= [
  {
    name:'ad',
    id:'asd'
  }
]
}
