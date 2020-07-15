import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Occupant } from 'src/app/models/occupant';

@Component({
	selector: 'app-occupant-create',
	templateUrl: './occupant-create.component.html',
	styleUrls: ['./occupant-create.component.css']
})
export class OccupantCreateComponent implements OnInit {
	public occupant = new Occupant();

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
	}

}
