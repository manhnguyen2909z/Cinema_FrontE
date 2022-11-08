import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';
import { Moviesdto } from '../../../services/model/moviesdto';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  
    constructor(private movies: MoviesAdminService) {}
    ngOnInit(): void {
        this.movies.getAllMovies().subscribe((res) => {
            this.films = res;
        });
    }
    films = [] as Moviesdto[]
    dec =true
    decName!:boolean
    isHiddenName!:boolean
    isSortDec=false
    sortByName(){
        this.isSortDec = !this.isSortDec
        if(this.isSortDec){
            this.decName =true
            this.films.sort((a, b) => -1 * a.movieName.localeCompare(b.movieName))

        }
        if(!this.isSortDec){
          this.decName =false
            this.films.sort((a, b) =>a.movieName.localeCompare(b.movieName))

        }
    }
    

    // films = [
    //     {
    //       movieName:'Black Adam2',
    //       movieDescription: 'Phim này rât là ok',
    //       category:'Khoa học viễn tưởng, hài',
    //       filmId:' 123456',
    //       releaseDate:'2008/11/28',
    //       duration:'129 phút'
    //     },
    //     {
    //       movieName:'Black Adam1',
    //       movieDescription: 'Phim này rât là ok1',
    //       category:'Khoa học viễn tưởng, hài',
    //       filmId:' 123456',
    //       releaseDate:'2008/11/28',
    //       duration:'129 phút'
    //     },
    //     {
    //       movieName:'Black Adam3',
    //       movieDescription: 'Phim này rât là ok1',
    //       category:'Khoa học viễn tưởng, hài',
    //       filmId:' 123456',
    //       releaseDate:'2008/11/28',
    //       duration:'129 phút'
    //     },
    //     {
    //       movieName:'Black Adam1',
    //       movieDescription: 'Phim này rât là ok1',
    //       category:'Khoa học viễn tưởng, hài',
    //       filmId:' 123456',
    //       releaseDate:'2008/11/28',
    //       duration:'129 phút'
    //     }
    //   ]
      items = 1
      // films: any;
      p: number = 1;
}
