import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviedto } from '../../model/moviedto';

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

    // GET
    public getAllMovies(): Observable<Moviedto> {
        return this.http.get<Moviedto>(this.rootUrl);
    }
    // get detailFilm
    public getDetailMovie(id: String): Observable<any> {
        return this.http.get<any>(this.rootUrl + '/detailMovieId?detailMovieId=' + id);
    }
}
