import { Component, Input, OnInit } from '@angular/core';

import { Billdto } from 'src/app/services/model/billdto';
import { TicketService } from '../../services/api/user/ticket.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private ticket : TicketService) { }
  ngOnInit(): void {
  }
  billDto = [] as Billdto[];
  
  done(){
    
    this.ticket.addTicket(this.billDto[0]).subscribe(res =>
     console.log(res)
      )
  }

}
