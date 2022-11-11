import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isLogin= true
  logout(){
    this.isLogin = false
  }
  login(){
    this.isLogin =true
  }

}
