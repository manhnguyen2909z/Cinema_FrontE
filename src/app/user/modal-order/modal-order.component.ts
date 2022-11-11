import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CinemaService } from '../../services/api/user/cinema.service';
import { Seatsdto } from '../../services/model/seatsdto';
import { SeatsService } from '../../services/api/user/seats.service';
import { Moviesdto } from '../../services/model/moviesdto';
import { Showtimedto } from '../../services/model/showtimedto';
import { ShowTimeService } from '../../services/api/user/showtime.service';
import { Cinemadto } from '../../services/model/cinemadto';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
    selector: 'app-modal-order',
    templateUrl: './modal-order.component.html',
    styleUrls: ['./modal-order.component.css'],
})
export class ModalOrderComponent implements OnInit {
    constructor(private cinema: CinemaService, private seat: SeatsService, private showtime: ShowTimeService) {
        this.date = new Date().toISOString().slice(0, 16);
    }
    @Input() modalId: any;
    cinemaDto = [] as Cinemadto[];
    showtimeDto = [] as Showtimedto[];
    seatsDto = [] as Seatsdto[];
    cinemaId!: string;
    showtimeId!: string;
    data = [''];
    result = [''];
    date =Date();
    noShowTime="";
    close() {
        // this.seats.forEach((seat) => {
        //     seat.isSelect = false;
        // });
        this.cinemaDto = [];
        this.showtimeDto = [];
        this.seatsDto = [];
        this.noShowTime=''
     
        
    }
    getdate(){
        this.getShowTime()
        this.close()
    }
    select(id: string) {
        // this.seats.forEach((seat) => {
        //     if (id === seat.id) {
        //         seat.isSelect = !seat.isSelect;
        //         this.result.push(seat.name);
        //         this.data = [...this.result];
        //     }
        // });
    }
    getCinema() {
        this.getShowTime();
        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
           
        });
    }
    getShowTime() {
        this.showtime.getShowTime(this.cinemaId).subscribe((res: any) => {
            if (moment(res[0].showDate).format('YYYY-MM-DD') != this.date) {
                this.noShowTime = "Không có ca chiếu nào"
                this.showtimeDto = [];
                console.log(  this.date)
                
            
            } else {
                this.noShowTime = ""
                this.showtimeDto = res;
                this.showtimeDto = this.showtimeDto.filter((showtime) => showtime.movieId == this.modalId);
               
            }
        });
    }
    getSeats() {
        this.seat.getSeats(this.showtimeId).subscribe((res) => {
            this.seatsDto = res;
        });
    }

    ngOnInit(): void {
        // this.result.pop();
        // [GET] cinmea/user

        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
        });
    }
}
