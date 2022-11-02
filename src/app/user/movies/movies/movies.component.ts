import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/api/movie.service';
import { moviedto } from 'src/app/services/model/moviedto';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    // movieDto: Array<moviedto> = new Array<moviedto>
    // movieDto = [
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'1'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'2'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'3'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'4'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'5'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'1'
    //     },
    //     {
    //         image:'https://cdn.galaxycine.vn/media/2022/10/12/1350wx900h_1665592999797.jpg',
    //         movieId:'1'
    //     },
    // ]
    p: number = 1;

    constructor(private movie: MoviesService) {}
    movieDto: any;
    detailMovieDto: any;
    formDetail = document.getElementById('formDetail') 
    submit(){
        
    }
    detail(id: string) {
        this.movie.getDetailMovie(id).subscribe((res) => {
            this.detailMovieDto = res;
            console.log(this.detailMovieDto);
        });
    }
    ngOnInit(): void {
        this.movie.getAllMovies().subscribe((res) => {
            this.movieDto = res.data;
        });
    }
}
