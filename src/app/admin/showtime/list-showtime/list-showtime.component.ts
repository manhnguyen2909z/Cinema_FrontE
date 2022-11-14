import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ShowTimeService } from 'src/app/services/api/user/showtime.service';
import { ShowTimedto } from 'src/app/services/model/showtimedto';

@Component({
  selector: 'app-list-showtime',
  templateUrl: './list-showtime.component.html',
  styleUrls: ['./list-showtime.component.css']
})
export class ListShowtimeComponent implements OnInit {

  constructor(private showtime: ShowTimeService) { }
  showtimedto:any;
  ngOnInit(): void {
    this.showtime.getAllShowTimes().subscribe((res) => {
      console.log(res);
      this.showtimedto = res;
      
  });
  
}
showtimes = [] as ShowTimedto[]
items=5
  p: number = 1;

}
