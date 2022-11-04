import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
 
    constructor(private movies: MoviesAdminService) {}
    // film:any = [
    //   {
    //     name:'Black Adam',
    //     description: 'Phim này rât là ok',
    //     category:'Khoa học viễn tưởng, hài',
    //     filmId:' 123456',
    //     premiere:'2008/11/28',
    //     time:'129 phút'
    //   },
    //   {
    //     name:'Black Adam1',
    //     description: 'Phim này rât là ok1',
    //     category:'Khoa học viễn tưởng, hài',
    //     filmId:' 123456',
    //     premiere:'2008/11/28',
    //     time:'129 phút'
    //   },
    //   {
    //     name:'Black Adam1',
    //     description: 'Phim này rât là ok1',
    //     category:'Khoa học viễn tưởng, hài',
    //     filmId:' 123456',
    //     premiere:'2008/11/28',
    //     time:'129 phút'
    //   },
    //   {
    //     name:'Black Adam1',
    //     description: 'Phim này rât là ok1',
    //     category:'Khoa học viễn tưởng, hài',
    //     filmId:' 123456',
    //     premiere:'2008/11/28',
    //     time:'129 phút'
    //   }
    // ]
    films: any;
    p: number = 1;
    ngOnInit(): void {
        this.movies.getAllMovies().subscribe((res) => {
            this.films = res.data;
        });
    }
}
