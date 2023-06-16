import { Component, OnInit } from '@angular/core';
import { CategoryMovieService } from '../../../services/api/user/categorymovie.service';
import { CategoryMovieAdminService } from '../../../services/api/admin/categorymovie.service';

@Component({
  selector: 'app-catmoviecreate',
  templateUrl: './catmoviecreate.component.html',
  styleUrls: ['./catmoviecreate.component.css'],
})
export class CatmoviecreateComponent implements OnInit {
  catName: any;

  constructor(private catMovie: CategoryMovieAdminService) {
  }

  ngOnInit(): void {
  }

  addCatName() {
    this.catMovie.addCatName({ categoryMovieName: this.catName }).subscribe((res) => {
      console.log(res);
    });
  }
}
