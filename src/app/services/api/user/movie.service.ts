import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { moviedto } from '../../model/moviedto';

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
    public getAllMovies(): Observable<moviedto> {
        return this.http.get<moviedto>(this.rootUrl);
    }
    // get detailFilm
    public getDetailMovie(id: string): Observable<any> {
        return this.http.get<any>(this.rootUrl + '/detailMovieId?detailMovieId=' + id);
    }
}
