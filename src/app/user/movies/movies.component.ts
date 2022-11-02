import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/api/movie.service';
import { moviedto } from 'src/app/services/model/moviedto'; 

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    // movieDto: Array<moviedto> = new Array<moviedto>
    movieDto:any
    constructor(private movie: MoviesService) {}

    ngOnInit(): void {
        
        this.movie.getlist().subscribe((res) => {
            this.movieDto = res.data;
            
        });
    }
}
