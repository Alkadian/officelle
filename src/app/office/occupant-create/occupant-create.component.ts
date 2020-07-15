import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Occupant } from 'src/app/models/occupant';
import { OccupantService } from 'src/app/services/occupant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-occupant-create',
	templateUrl: './occupant-create.component.html',
	styleUrls: ['./occupant-create.component.css']
})
export class OccupantCreateComponent implements OnInit {
	@Input() public office_id: string;
	public occupant = new Occupant();

	constructor(public activeModal: NgbActiveModal, private occupantService: OccupantService) { }

	ngOnInit(): void {  }

	onSubmit() {
		this.occupantService.createOccupant(this.office_id, this.occupant).subscribe();
		this.activeModal.close('Form Submission');
	}
}
