import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from 'src/app/services/api/admin/movies.service';
import { CinemaService } from 'src/app/services/api/user/cinema.service';
import { ShiftService } from 'src/app/services/api/user/shift.service';
import { ShowTimeService } from 'src/app/services/api/user/showtime.service';
import { Cinemadto } from 'src/app/services/model/cinemadto';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import { Roomdto } from 'src/app/services/model/roomdto';
import { Shiftdto } from 'src/app/services/model/shiftdto';
import { ShowTimedto } from 'src/app/services/model/showtimedto';
import { ShowTimeAdminService } from '../../../services/api/admin/showtime.service';


@Component({
  selector: 'app-list-showtime',
  templateUrl: './list-showtime.component.html',
  styleUrls: ['./list-showtime.component.css'],
})
export class ListShowtimeComponent implements OnInit {
  showTime: any;

  constructor(
    private showtime: ShowTimeService,
    private showtimeAdmin: ShowTimeAdminService,
    private movies: MoviesAdminService,
    private cinemas: CinemaService,
    private getByMovieId: ShowTimeService,
    private getByShowDateId: ShowTimeService,
  ) {
  }

  showtimedto: any;
  ngOnInit(): void {
    this.getAllShowtime();
    this.movies.getAllMovies().subscribe((res) => {
      this.movieDto = res;
    });
    this.cinemas.getAllCinema().subscribe((res) => {
      this.cinemadto = res.data;
    });


    this.today = new Date();
  }

  getBymovieId() {
    this.getByMovieId.getShowTimeWithMovieId(this.movieId).subscribe(res => {
      this.showtimedto = res;
    });
  }

  getbyShowDate() {
    this.getByShowDateId.getShowTimeWithDateId(this.date).subscribe(res => {
      this.showtimedto = res;
    });
  }

  getAllShowtime() {
    this.showtime.getAllShowTimes().subscribe((res) => {
      this.showtimedto = res;
    });
    this.movieId = '';
  }

  today!: Date;
  date!: Date;
  movieId!: string;
  cinemaId!: string;
  cinemaName!: Cinemadto[];
  shiftId!: string;
  roomId!: string;
  movieDto!: Moviesdto[];
  cinemadto!: Cinemadto[];
  roomdto!: Roomdto[];
  shiftDto!: Shiftdto[];

  showtimes = [] as ShowTimedto[];
  items = 10;
  p: number = 1;

  editShowTime(showtime: ShowTimedto) {
    this.showtimeAdmin.infoShowTime(showtime);
    // this.showtimeAdmin.ShowTime.next(showtime);
  }

  deleteShowTime(showTime: any) {
    this.showTime = showTime;
  }

  confirmDelete() {
    this.showtimeAdmin.deleteShowTime(this.showTime.showTimeId.toString()).subscribe(
      () => {
        alert('Xóa ca chiếu thành công');
        this.getAllShowtime();
      },
      () => {
        alert('Xóa ca chiếu thất bại');
      },
    );

  }
}
