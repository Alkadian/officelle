import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeService } from 'src/app/services/office.service';
import { IOffice } from 'src/app/interfaces/office';

@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css']
})
export class OfficeDeleteComponent implements OnInit {
	@Input() public office:IOffice;

	constructor(public activeModal: NgbActiveModal, private officeService: OfficeService) { }

	ngOnInit(): void { }

	onSubmit(office_id) {
		this.officeService.deleteOffice(office_id).subscribe(
			(data) => this.activeModal.close('Successful Submission'),
			(error) => this.activeModal.dismiss(error)
		);
	}

}
