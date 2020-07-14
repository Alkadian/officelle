import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Office } from '../interfaces/office';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OfficeService {
    private url = 'http://localhost:3000/offices';

    constructor(private http: HttpClient) {}

    getOffices(): Observable <Office[]> {
		return this.http.get <Office[]> (this.url);
    }
}