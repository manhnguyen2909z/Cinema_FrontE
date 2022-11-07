import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/api/user/movie.service';
import { Moviedto } from 'src/app/services/model/moviedto';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    p: number = 1;
   @Input() item: number = 8
   @Input() isShow:boolean = true
    constructor(private movie: MoviesService) {}
    movieDto= [] as Moviedto[];
    movieShowing = [] as Moviedto[];
    detailMovieDto: any;

    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }
    ngOnInit(): void {
        this.movie.getAllMovies().subscribe((res:any) => {
            this.movieDto = res;
            this.movieShowing = this.movieDto.filter((movie) => movie.isShowing === true);
            
            // console.log('dang chieu')
        });
    }
}
