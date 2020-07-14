import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occupant } from '../interfaces/occupant';

@Injectable({
    providedIn: 'root'
})
export class OccupantService {
	private url = 'http://localhost:3000/occupants';

    constructor(private http: HttpClient) {}

	getOccupants(): Observable <Occupant[]> {
		return this.http.get <Occupant[]> (this.url);
	}
}