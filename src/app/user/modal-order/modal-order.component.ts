import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/api/user/cinema.service';
import { Seatsdto } from '../../services/model/seatsdto';
import { SeatsService } from '../../services/api/user/seats.service';

@Component({
    selector: 'app-modal-order',
    templateUrl: './modal-order.component.html',
    styleUrls: ['./modal-order.component.css'],
})
export class ModalOrderComponent implements OnInit {
    constructor(private cinema :CinemaService,private seat: SeatsService) {}
    cinemaDto:any
    seatsDto = [] as Seatsdto[];
    data = [''];
    result = [''];
    reset() {
        // this.seats.forEach((seat) => {
        //     seat.isSelect = false;
        // });
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
    ngOnInit(): void {
        this.result.pop()
        // [GET] cinmea/user
        this.cinema.getAllCinema().subscribe(res =>{
            this.cinemaDto = res.data
        })
        //GET seat
        this.seat.getAllSeats().subscribe(res =>
            this.seatsDto = res.data
            )

    }
    
    

    
}
