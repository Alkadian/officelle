import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOffice } from '../interfaces/office';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OfficeService {
    private url = 'http://localhost:3000/offices/';

    constructor(private http: HttpClient) {}

    getOffices(): Observable <IOffice[]> {
		return this.http.get <IOffice[]> (this.url);
	}
	
	getOffice(id: String): Observable <IOffice> {
		return this.http.get <IOffice> (this.url + id);
	}

	createOffice(office: IOffice): Observable <IOffice> {
		return this.http.post <IOffice> (this.url, office);
	}

	updateOffice(office_id: String, office: IOffice): Observable <IOffice> {
		return this.http.put <IOffice> (this.url + office_id, office);
	}

	deleteOffice(office_id: String): Observable <IOffice> {
		return this.http.delete <IOffice> (this.url + office_id);
	}
}