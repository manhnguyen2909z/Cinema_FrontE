import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';
import { Billdto } from '../../model/billdto';


@Injectable({
    providedIn: 'root',
})
export class BillService extends BaseApiService {
    constructor(http: HttpClient) {
        super(http);
    }

    name() {
        return 'Bill';
    }

    // GET

    public getBill(): Observable<Billdto> {
        return this.http.get<Billdto>(this.rootUrl + '/Bill')
    }
}
