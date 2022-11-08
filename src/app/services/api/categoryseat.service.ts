import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

@Injectable({
    providedIn: 'root',
})
export class CategorySeatsService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  name() {
    return 'CategorySeat';
  }
  

  // GET
  public getAllCategorySeats(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }

}
