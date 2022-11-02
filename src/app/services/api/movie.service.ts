import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiUrl } from '../baseapi';
import { moviedto } from '../model/moviedto';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}
     baseUrl = new BaseApiUrl; 
    // GET

    public getlist(): Observable<any> {
        // console.log(this.baseUrl.rootUrl)
        return this.http.get<any>(this.baseUrl.rootUrl + 'Movie'); // link truyen vao day
    }
    public detail(id:string): Observable<any> {
        // console.log(this.baseUrl.rootUrl)
        console.log(id)

        return this.http.get<any>(this.baseUrl.rootUrl + 'Movie/detailMovieId?detailMovieId='+ id); 
        // return this.http.get<any>('https://localhost:7068/api/Movie/detailMovieId?detailMovieId=b42b8b06-3198-41f8-9fa8-3367eae12925'); 
    }
    
}
