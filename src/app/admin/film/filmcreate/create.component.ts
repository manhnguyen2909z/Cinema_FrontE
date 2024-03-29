import { Component, OnInit } from '@angular/core';
import { listCategoryMoviedto } from 'src/app/services/model/listCategoryMoviedto';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';
import { Moviesdto } from '../../../services/model/moviesdto';
import { CreateMovieAdminService } from '../../../services/api/admin/createmovie.service';
import { CategoryMovieAdminService } from '../../../services/api/admin/categorymovie.service';
import { categorymoviedto } from '../../../services/model/categorymoviedto';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
    constructor(private listCategoryMovie: CategoryMovieAdminService, private movie: CreateMovieAdminService) {}
    listCategoryMoviedto = [] as categorymoviedto[];
    listCategorySelect = [] as categorymoviedto[];
    ngOnInit(): void {
        this.listCategoryMovie.getAllCategory().subscribe((res) => {
            this.listCategoryMoviedto = res.data;
        });
    }
    movieName!: string;
    description!: string;
    releaseDate!: Date;
    endShowDate!: Date;
    duration!: Date;
    image!: string;
    actor!: string;
    director!: string;
  isCheck: any;

    getCategory() {
        this.listCategoryMoviedto.forEach(category =>{
          if(category.isCheck){
            this.listCategorySelect.push(category);
          }
        })
    }
    addMovie() {
        const newMovie: Moviesdto = new Moviesdto();
        newMovie.movieName = this.movieName;
        newMovie.duration = this.duration;
        newMovie.actor = this.actor;
        newMovie.image = this.image;
        newMovie.director = this.director;
        newMovie.movieDescription = this.description;
        newMovie.releaseDate = this.releaseDate;
        newMovie.endShowDate = this.endShowDate;
        newMovie.categoryMovies = this.listCategorySelect;
        this.getCategory()
        this.movie.addMovie(newMovie).subscribe();
        this.reset();
    }
    reset() {
        this.movieName = '';
        this.duration;
        this.actor = '';
        this.image = '';
        this.director = '';
        this.description = '';
        this.releaseDate;
    }
}
