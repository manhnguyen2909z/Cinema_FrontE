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
    constructor(private cinema: CinemaService, private seat: SeatsService, private showtime: ShowTimeService) {}
    @Input() modalId: any;
    cinemaDto = [] as Cinemadto[];
    showtimeDto = [] as Showtimedto[];
    showtimeDtoCheck = [] as Showtimedto[];
    seatsDto = [] as Seatsdto[];
    cinemaId: any;
    data = [''];
    result = [''];
    date = Date();

    reset() {
        // this.seats.forEach((seat) => {
        //     seat.isSelect = false;
        // });

        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = [];
        });
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
        this.showtime.getShowTime(this.cinemaId).subscribe((res: any) => {
            this.showtimeDto = res;
            this.showtimeDtoCheck = this.showtimeDto.filter((showtime) => showtime.movieId == this.modalId);
        });
        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
            console.log(this.cinemaDto);
        });
    }
    getShowTime() {
        this.showtime.getShowTime(this.cinemaId).subscribe((res: any) => {
            this.showtimeDto = res;
            this.showtimeDtoCheck = this.showtimeDto.filter((showtime) => showtime.movieId == this.modalId);
        });
    }

    ngOnInit(): void {
        // this.result.pop();
        // [GET] cinmea/user
        this.cinema.getAllCinema().subscribe((res) => {
            this.cinemaDto = res.data;
        });
        //GET seat
        this.seat.getAllSeats().subscribe((res) => (this.seatsDto = res.data));
    }
}
