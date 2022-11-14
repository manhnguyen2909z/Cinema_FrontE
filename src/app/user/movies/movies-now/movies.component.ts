import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../../services/api/user/movie.service';
import { Moviesdto } from 'src/app/services/model/moviesdto';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    constructor(private movie: MoviesService, @Inject(DOCUMENT) document: Document) {}
    p: number = 1;
<<<<<<< HEAD
    @Input() item: number = 8;
    @Input() isShow: boolean = true;
    movieDto = [] as Moviesdto[];
    movieShowing = [] as Moviesdto[];
    detailMovieDto: any;
    date = new Date();
    link!: string;

    toLogin() {}
=======
   @Input() item: number = 8
   @Input() isShow:boolean = true


    constructor(private movie: MoviesService, private router:Router) {}
    movieDto= [] as Moviesdto[];
    movieShowing = [] as Moviesdto[];
    detailMovieDto: any;
    date = new Date();
    isLogin = false;

>>>>>>> acc0778a6cedd5bfafd15f38cc8b2f4566abaeef
    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }
    btn:any
    login!: boolean;
    ngOnInit(): void {
        setTimeout(()=>{
            this.btn = document.getElementById('btn-order') as HTMLButtonElement;
            if (!this.login) {
            this.btn.setAttribute('href', '/signIn');
        } else if (this.login) {
           this.btn.setAttribute('data-bs-toggle', 'modal');
        }
            console.log(this.btn)
        }, 2000)
      
        this.toLogin();
        if (!this.login) {
            this.link = '/signIn';
        }
        this.movie.getAllMovies().subscribe((res: any) => {
            localStorage.length > 0 ? (this.login = true) : (this.login = false);
            this.movieDto = res;
<<<<<<< HEAD
            console.log(this.login);
            this.movieShowing = this.movieDto.filter((movie) => {
                let dateComing = moment(movie.releaseDate).format('DD-MM-YYYY');

                return dateComing < moment(this.date).format('DD-MM-YYYY');
            });

=======
            localStorage.length >  0 ? this.isLogin = true : this.isLogin = false;
            console.log(this.isLogin);
            this.movieShowing = this.movieDto.filter((movie) => {
            let dateComing = moment(movie.releaseDate).format('DD-MM-YYYY');
            return dateComing < moment(this.date).format('DD-MM-YYYY');});
>>>>>>> acc0778a6cedd5bfafd15f38cc8b2f4566abaeef
            // console.log('dang chieu')
            this.movieShowing = this.movieDto.filter((movie) => movie.isShowing === true);
        });
    }
<<<<<<< HEAD
 
=======

    goToLogin(){
      this.router.navigate(['/signIn']);
    }
>>>>>>> acc0778a6cedd5bfafd15f38cc8b2f4566abaeef
}
