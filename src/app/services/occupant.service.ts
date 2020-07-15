import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOccupant } from '../interfaces/occupant';

@Injectable({
    providedIn: 'root'
})
export class OccupantService {
	private url = 'http://localhost:3000/occupants';

    constructor(private http: HttpClient) {}

	getOccupants(office_id: String, filter: String = ''): Observable <IOccupant[]> {
		return this.http.get <IOccupant[]> (`${this.url}?office_id=${office_id}&q=${filter}`);
	}

	getOccupant(occupant_id): Observable <IOccupant> {
		return this.http.get <IOccupant> (`${this.url}/${occupant_id}`);
	}

	createOccupant(occupant): Observable <IOccupant> {
		return this.http.post <IOccupant> (this.url, occupant);
	}

	updateOccupant(occupant): Observable <IOccupant> {
		return this.http.put <IOccupant> (this.url, occupant);
	}

	deleteOccupant(occupant_id): Observable <IOccupant> {
		return this.http.delete <IOccupant> (`${this.url}/${occupant_id}`)
	}

}