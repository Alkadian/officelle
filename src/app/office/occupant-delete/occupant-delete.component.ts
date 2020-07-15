import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantService } from 'src/app/services/occupant.service';
import { IOccupant } from 'src/app/interfaces/occupant';

@Component({
	selector: 'app-occupant-delete',
	templateUrl: './occupant-delete.component.html',
	styleUrls: ['./occupant-delete.component.css']
})
export class OccupantDeleteComponent implements OnInit {
	@Input() public occupant: IOccupant;

	constructor(public activeModal: NgbActiveModal, private occupantService: OccupantService) { }

	ngOnInit(): void {
	}

	onSubmit() {		
		this.occupantService.deleteOccupant(this.occupant.id).subscribe();
		this.activeModal.close('Form Submission');
	}
}
