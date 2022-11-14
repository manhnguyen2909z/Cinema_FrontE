import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../../services/api/user/movie.service';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    p: number = 1;
   @Input() item: number = 8
   @Input() isShow:boolean = true


    constructor(private movie: MoviesService, private router:Router) {}
    movieDto= [] as Moviesdto[];
    movieShowing = [] as Moviesdto[];
    detailMovieDto: any;
    date = new Date();
    isLogin = false;

    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }

    ngOnInit(): void {
        this.movie.getAllMovies().subscribe((res:any) => {
            this.movieDto = res;
            localStorage.length >  0 ? this.isLogin = true : this.isLogin = false;
            console.log(this.isLogin);
            this.movieShowing = this.movieDto.filter((movie) => {
            let dateComing = moment(movie.releaseDate).format('DD-MM-YYYY');
            return dateComing < moment(this.date).format('DD-MM-YYYY');});
            // console.log('dang chieu')
            this.movieShowing = this.movieDto.filter((movie) => movie.isShowing === true);

        });
    }

    goToLogin(){
      this.router.navigate(['/signIn']);
    }
}
