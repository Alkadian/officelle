import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeService } from 'src/app/services/office.service';
import { IOffice } from 'src/app/interfaces/office';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.css']
})
export class OfficeEditComponent implements OnInit {
	@Input() public office: IOffice;

  	constructor(public activeModal: NgbActiveModal, private officeService: OfficeService) { }

	ngOnInit(): void {
	}

	onSubmit() {
		this.officeService.updateOffice(this.office).subscribe(
			(data) => this.activeModal.close('Successful Submission'),
			(error) => this.activeModal.dismiss(error)
		);
	}

}
