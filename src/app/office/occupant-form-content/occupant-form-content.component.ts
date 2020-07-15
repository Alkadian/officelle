import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-occupant-form-content',
	templateUrl: './occupant-form-content.component.html',
	styleUrls: ['./occupant-form-content.component.css']
})
export class OccupantFormContentComponent implements OnInit {
	@Input() public occupant;
	@Output public formData = new EventEmitter;
	constructor() { }

	ngOnInit(): void {
	}

}
