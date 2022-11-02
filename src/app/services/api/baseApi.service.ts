import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiUrl } from '../baseapi'; 

@Injectable({
    providedIn: 'root',
})
export class BaseApiService {
    constructor(private http: HttpClient) {}
     baseUrl = new BaseApiUrl; 
    // GET

    public getlist(): Observable<any> {
        // console.log(this.baseUrl.rootUrl)
        return this.http.get<any>(this.baseUrl.rootUrl + 'Movie'); // link truyen vao day
    }
}
