import { Component, Input, OnInit } from '@angular/core';

import { Billdto } from 'src/app/services/model/billdto';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input() billDto = [] as Billdto[];
  done(){
    this.billDto = []
  }
}
