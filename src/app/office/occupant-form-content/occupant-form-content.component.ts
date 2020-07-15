import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOccupant } from 'src/app/interfaces/occupant';

@Component({
	selector: 'app-occupant-form-content',
	templateUrl: './occupant-form-content.component.html',
	styleUrls: ['./occupant-form-content.component.css']
})
export class OccupantFormContentComponent implements OnInit {
	@Input() public occupant:IOccupant;
	@Output() public formData = new EventEmitter;

	constructor() { }

	ngOnInit(): void {
	}

}
