import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOffice } from '../interfaces/office';
import { Observable, throwError } from 'rxjs';
import { HashService } from './hash.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class OfficeService {
	private url = 'http://localhost:3000/offices/';

	constructor(private http: HttpClient, private hash: HashService) { }

	getOffices(): Observable<IOffice[]> {
		return this.http.get<IOffice[]>(this.url).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	getOffice(id: string): Observable<IOffice> {
		return this.http.get<IOffice>(this.url + id).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	createOffice(office: IOffice): Observable<IOffice> {
		office.id = this.hash.generateId();
		return this.http.post<IOffice>(this.url, office).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	updateOffice(office: IOffice): Observable<IOffice> {
		return this.http.put<IOffice>(this.url + office.id, office).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	deleteOffice(office_id: string): Observable<IOffice> {
		return this.http.delete<IOffice>(this.url + office_id).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}
}