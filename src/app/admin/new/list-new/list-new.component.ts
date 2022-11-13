import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/services/api/user/new.service';
import { Newdto } from 'src/app/services/model/newdto';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit {

  constructor(private news: NewService) { }
  newdto:any;
  ngOnInit(): void {
    this.news.getAllNews().subscribe((res) => {
      this.newdto = res.data;
      console.log(this.newdto);
  });
  
}
newss = [] as Newdto[]
items=1
  p: number = 1;
}
