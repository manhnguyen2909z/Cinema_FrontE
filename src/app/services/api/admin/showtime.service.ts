import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Moviesdto } from '../../model/moviesdto';
import { ShowTimedto } from '../../model/showtimedto';

@Injectable({
  providedIn: 'root',
})
export class ShowTimeAdminService extends BaseApiService {
  data: any;
  ShowTime = new Subject();

  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'ShowTime';
  }

  public infoShowTime(data: any) {
    this.data = data;
  }


  public getInfoShowTime() {
    return this.data;
  }

  public addShowTime(showtime: ShowTimedto): Observable<ShowTimedto> {
    return this.http.post<ShowTimedto>(this.rootUrl, showtime);
  }

  public editShowTime(id: any, showtime: ShowTimedto): Observable<ShowTimedto> {
    return this.http.put<ShowTimedto>(this.rootUrl + `?id=${id}`, showtime);
  }

  public deleteShowTime(id: any): Observable<ShowTimedto> {
    return this.http.delete<ShowTimedto>(this.rootUrl + `/${id}`);
  }

}
