import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/api/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
detailmoviedto :any
  constructor(private detail: MoviesService) { }
  
  ngOnInit(): void {
    this.detail.detail(this.detailmoviedto.movieId).subscribe((res) => {
      this.detailmoviedto = res;
      console.log(this.detailmoviedto.movieId)
      
  });
  }

}
