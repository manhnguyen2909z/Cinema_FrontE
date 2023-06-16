import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryMovieAdminService } from 'src/app/services/api/admin/categorymovie.service';
import { categorymoviedto } from 'src/app/services/model/categorymoviedto';
import { EditMovieService } from '../../../services/api/admin/editmovie.service';
import { listCategoryMoviedto } from 'src/app/services/model/listCategoryMoviedto';
import { Moviesdto } from '../../../services/model/moviesdto';
import { CreateMovieAdminService } from '../../../services/api/admin/createmovie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private listCategoryMovie: CategoryMovieAdminService, private route: ActivatedRoute, private editMovie: EditMovieService) {
  }

  ngOnInit(): void {
    this.listCategoryMovie.getAllCategory().subscribe((res) => {
      this.listCategoryMoviedto = res.data;
    });
    const movieId = this.route.snapshot.paramMap.get('movieId') as any;
    this.editMovie.getdetailEdit(movieId).subscribe(res => {
      console.log(res);
      this.movieId = res.movieId;
      this.movieName = res.movieName;
      this.description = res.movieDescription;
      this.actor = res.actor;
      this.duration = res.duration;
      this.image = res.image;
      this.releaseDate = res.releaseDate;
      this.director = res.director;
      this.endShowDate = res.endShowDate;
      this.listCategoryMoviedto = this.listCategorySelect.data;
      // this.listCategorySelect.data.forEach((element1:any) => {
      //   res.categoryMovies.forEach((element2:any) => {
      //     element1.categoryMovieId == element2.categoryMovieId

      //   });
      // });
    });
  }

  movieId!: string;
  movieName!: string;
  description!: string;
  releaseDate!: Date;
  endShowDate!: Date;
  duration!: Date;
  image!: string;
  actor!: string;
  director!: string;
  listCategorySelect: categorymoviedto[] | any;
  listCategoryMoviedto = [] as categorymoviedto[];
  catId!: string;

  saveMovie() {
    const newMovie: Moviesdto = new Moviesdto();
    const movieId = this.movieId;
    newMovie.movieName = this.movieName;
    newMovie.duration = this.duration;
    newMovie.actor = this.actor;
    newMovie.image = this.image;
    newMovie.director = this.director;
    newMovie.movieDescription = this.description;
    newMovie.releaseDate = this.releaseDate;
    newMovie.endShowDate = this.endShowDate;
    newMovie.categoryMovies = this.listCategorySelect;
    this.getCategory();
    this.editMovie.editMovie(newMovie, movieId).subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigate(['/admin/film']);
      },
      () => {
        alert('Cập nhật thất bại');
      });
    this.reset();
  }

  getCategory() {
    this.listCategoryMoviedto.forEach(category => {
      if (category.isCheck) {
        this.listCategorySelect.push(category);
      }
    });
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

  checkbox = document.getElementById(
    this.catId,
  ) as HTMLInputElement | null;
}
