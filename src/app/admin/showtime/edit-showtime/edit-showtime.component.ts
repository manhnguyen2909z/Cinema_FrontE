import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';
import { CinemaService } from '../../../services/api/user/cinema.service';
import { ShowTimeAdminService } from '../../../services/api/admin/showtime.service';
import { RoomService } from '../../../services/api/user/room.service';
import { ShiftService } from '../../../services/api/user/shift.service';
import { ShowTimedto } from '../../../services/model/showtimedto';
import { catchError } from 'rxjs';
import { Cinemadto } from '../../../services/model/cinemadto';
import { Moviesdto } from '../../../services/model/moviesdto';
import { Roomdto } from '../../../services/model/roomdto';
import { Shiftdto } from '../../../services/model/shiftdto';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-showtimeAdmin',
  templateUrl: './edit-showtime.component.html',
  styleUrls: ['./edit-showtime.component.css'],
})
export class EditShowtimeComponent implements OnInit, AfterViewInit {
  showTimeDetail: any = {};
  showTimeDto!: ShowTimedto[];
  today!: Date;
  date!: Date;
  movieId: string = '1';
  cinemaId!: string;
  cinemaName!: Cinemadto[];
  shiftId!: string;
  roomId!: string;
  movieDto!: Moviesdto[];
  cinemadto!: Cinemadto[];
  roomdto!: Roomdto[];
  shiftDto!: Shiftdto[];
  movieName: string = '';
  checkNullMovie!: boolean;
  checkNullCinema!: boolean;
  notPhoneNumber!: boolean;
  checkNullRoom!: boolean;
  checkDate!: boolean;
  checkNullShift!: boolean;
  roomName: any;

  constructor(
    private router: Router,
    private movies: MoviesAdminService,
    private cinemas: CinemaService,
    private showtimeAdmin: ShowTimeAdminService,
    private rooms: RoomService,
    private shifts: ShiftService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    console.log(this.showtimeAdmin.getInfoShowTime());
    this.movieName = this.showtimeAdmin.getInfoShowTime().movieName;
    this.cinemaName = this.showtimeAdmin.getInfoShowTime().cinemaName
    this.roomName = this.showtimeAdmin.getInfoShowTime().roomName
    this.date = this.showtimeAdmin.getInfoShowTime().showDate

    this.movies.getAllMovies().subscribe((res) => {
      this.movieDto = res;
    });
    this.cinemas.getAllCinema().subscribe((res) => {
      this.cinemadto = res.data;
    });
    this.shifts.getAllShifts().subscribe((res) => {
      this.shiftDto = res.data;
    });
    this.today = new Date();
  }

  getShowTimeEdit() {

  }

  getRoom() {
    this.rooms.getAllRooms().subscribe((res) => {
      this.roomdto = res.data;
      this.roomdto = this.roomdto.filter((room) => {
        return room.cinemaId === this.cinemaId;
      });
    });
  }


  validate() {
    // check movie
    if (!this.movieId) {
      this.checkNullMovie = true;
    } else {
      this.checkNullMovie = false;
    }
    // check cinema
    if (!this.cinemaId) {
      this.checkNullCinema = true;
    } else {
      this.checkNullCinema = false;
    }
    // check room
    if (!this.roomId) {
      this.checkNullRoom = true;
    } else {
      this.checkNullRoom = false;
    }
    //check date
    if (moment(this.date).format('YYYY-MM-DD') < moment(this.today).format('YYYY-MM-DD')) {
      this.checkDate = true;
    } else {
      this.checkDate = false;
    }
    //
    if (!this.shiftId) {
      this.checkNullShift = true;
    } else {
      this.checkNullShift = false;
    }
  }

  save() {
    const showTimeUpdate = {


    }
      // this.showtimeAdmin.editShowTime(this.showtimeAdmin.getInfoShowTime().showTimeId, )
  }

  ngAfterViewInit() {

  }
}
