import { Component, OnInit } from '@angular/core';
import { MoviesAdminService } from 'src/app/services/api/admin/movies.service';
import { listCategoryMoviedto } from 'src/app/services/model/listCategoryMoviedto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private listCategoryMovie: MoviesAdminService ) { }
  listCategoryMoviedto = [] as listCategoryMoviedto[]
  ngOnInit(): void {
    this.listCategoryMovie.getAllMovies().subscribe(res =>{
      this.listCategoryMoviedto = res[0].listCategoryMovieName
      console.log( this.listCategoryMoviedto )
    })
  }

}
