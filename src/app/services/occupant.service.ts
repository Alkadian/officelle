import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOccupant } from '../interfaces/occupant';
import { HashService } from './hash.service';

@Injectable({
    providedIn: 'root'
})
export class OccupantService {
	private url = 'http://localhost:3000/occupants';

	constructor(private http: HttpClient, private hash: HashService) {}

	getOccupants(office_id: string, filter: string = ''): Observable <IOccupant[]> {
		return this.http.get <IOccupant[]> (`${this.url}?office_id=${office_id}&q=${filter}`);
	}

	getOccupant(occupant_id: string): Observable <IOccupant> {
		return this.http.get <IOccupant> (`${this.url}/${occupant_id}`);
	}

	createOccupant(office_id: string, occupant: IOccupant): Observable <IOccupant> {
		occupant.id = this.hash.generateId();
		occupant.office_id = office_id;
		return this.http.post <IOccupant> (this.url, occupant);
	}

	updateOccupant(occupant: IOccupant): Observable <IOccupant> {
		console.log('Updaing...');
		return this.http.put <IOccupant> (`${this.url}/${occupant.id}`, occupant);
	}

	deleteOccupant(occupant_id: string): Observable <IOccupant> {
		return this.http.delete <IOccupant> (`${this.url}/${occupant_id}`)
	}

}