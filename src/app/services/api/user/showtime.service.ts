import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Showtimedto } from '../../model/showtimedto';

@Injectable({
    providedIn: 'root',
})
export class ShowTimeService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'ShowTime/bookingshowtime?CinemaId=';
    }

    // GET
    public getShowTime(id:string): Observable<Showtimedto> {
        return this.http.get<Showtimedto>(this.rootUrl +id);
    }   
}
