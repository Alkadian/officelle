import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOffice } from 'src/app/interfaces/office';

@Component({
	selector: 'app-office-form-content',
	templateUrl: './office-form-content.component.html',
	styleUrls: ['./office-form-content.component.css']
})
export class OfficeFormContentComponent implements OnInit {
	@Input() public office: IOffice;
	@Output() public formData = new EventEmitter;

	constructor() { }

	ngOnInit(): void {
	}

	onChange() {
		this.formData.emit(this.office);
	}

}
