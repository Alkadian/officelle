import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOccupant } from '../interfaces/occupant';

@Injectable({
    providedIn: 'root'
})
export class OccupantService {
	private url = 'http://localhost:3000/occupants/';

    constructor(private http: HttpClient) {}

	getOccupants(office_id): Observable <IOccupant[]> {
		return this.http.get <IOccupant[]> (this.url);
	}

	getOccupant(id): Observable <IOccupant> {
		return this.http.get <IOccupant> (this.url + id)
	}
}