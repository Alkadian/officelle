import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Office } from "../../models/office";
import { OfficeService } from 'src/app/services/office.service';

@Component({
	selector: 'app-office-create',
	templateUrl: './office-create.component.html',
	styleUrls: ['./office-create.component.css']
})
export class OfficeCreateComponent implements OnInit {
	public office = new Office();

	constructor(public activeModal: NgbActiveModal, private officeService: OfficeService) { }

	ngOnInit(): void { }

	onSubmit() {
		this.officeService.createOffice(this.office).subscribe(
			(data) => this.activeModal.close('Successful Submission'),
			(error) => this.activeModal.dismiss(error)
		);
	}
}