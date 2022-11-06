import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/api/user/movie.service';
import * as moment from 'moment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
detailmoviedto :any
constructor(private detailMovie: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any
    this.detailMovie.getDetailMovie(id).subscribe((res) => {
      this.detailmoviedto = res;
      console.log(res)
    });
  }

  fomartReleaseDate(releaseDate: Date){
    let formattedDate = (moment(releaseDate)).format('DD-MM-YYYY');
    console.log(formattedDate);
    return formattedDate;
  }


}
