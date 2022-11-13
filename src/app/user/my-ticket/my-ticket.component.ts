import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/api/user/ticket.service';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css']
})
export class MyTicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
