import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

@Injectable({
    providedIn: 'root',
})
export class MoviesService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'Movie';
  }


  // GET ALL MOVIES
  public getAllMovies(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }

  public getDetailMovie(id:string): Observable<any> {
    return this.http.get<any>(this.rootUrl+ '/detailMovieId?detailMovieId='+id);
  }

}
