
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    BASE_URL = "http://localhost:3000/";

    constructor(private http: HttpClient) {}

    getServices() : Observable<any> {
        return this.http.get(this.BASE_URL+'services/getServices');
    }

}
