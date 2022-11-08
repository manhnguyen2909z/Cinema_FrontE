import { Component, OnInit } from '@angular/core';
import { listCategoryMoviedto } from 'src/app/services/model/listCategoryMoviedto';
import { MoviesAdminService } from '../../../services/api/admin/movies.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private listCategoryMovie: MoviesAdminService ) { }
  listCategoryMoviedto = [] as listCategoryMoviedto[]
  ngOnInit(): void {
    this.listCategoryMovie.getAllMovies().subscribe(res =>{
      this.listCategoryMoviedto = res[0].listCategoryMovieName
      console.log( this.listCategoryMoviedto )
    })
  }

}
