import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/api/user/movie.service';
import { Moviedto } from 'src/app/services/model/moviedto';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    p: number = 1;
    constructor(private movie: MoviesService) {}
    movieDto: any;
    detailMovieDto: any;

    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
        });
    }
    ngOnInit(): void {
        this.movie.getAllMovies().subscribe((res) => {
            this.movieDto = res;
            console.log(this.movieDto)
        });
    }
}
