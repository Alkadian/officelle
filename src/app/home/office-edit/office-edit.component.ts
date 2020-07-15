import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.css']
})
export class OfficeEditComponent implements OnInit {
	@Input() public office;

  	constructor(public activeModal: NgbActiveModal, private officeService: OfficeService) { }

	ngOnInit(): void {
	}

	onSubmit(office_id: String) {
		this.officeService.updateOffice(office_id, this.office).subscribe();
		this.activeModal.close('Form Submission');
	}

}
