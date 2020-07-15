import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IOccupant } from '../interfaces/occupant';
import { HashService } from './hash.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OccupantService {
	private url = 'http://localhost:3000/occupants';

	constructor(private http: HttpClient, private hash: HashService) {}

	getOccupants(office_id: string, filter: string = ''): Observable <IOccupant[]> {
		return this.http.get <IOccupant[]> (`${this.url}?office_id=${office_id}&q=${filter}`).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	getOccupant(occupant_id: string): Observable <IOccupant> {
		return this.http.get <IOccupant> (`${this.url}/${occupant_id}`).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	createOccupant(office_id: string, occupant: IOccupant): Observable <IOccupant> {
		occupant.id = this.hash.generateId();
		occupant.office_id = office_id;
		return this.http.post <IOccupant> (this.url, occupant).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	updateOccupant(occupant: IOccupant): Observable <IOccupant> {
		console.log('Updaing...');
		return this.http.put <IOccupant> (`${this.url}/${occupant.id}`, occupant).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

	deleteOccupant(occupant_id: string): Observable <IOccupant> {
		return this.http.delete <IOccupant> (`${this.url}/${occupant_id}`).pipe(
			catchError(() => throwError('Something bad happened; please try again later.'))
		);
	}

}