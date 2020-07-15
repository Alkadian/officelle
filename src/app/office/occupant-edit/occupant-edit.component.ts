import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantService } from 'src/app/services/occupant.service';
import { IOccupant } from 'src/app/interfaces/occupant';

@Component({
  selector: 'app-occupant-edit',
  templateUrl: './occupant-edit.component.html',
  styleUrls: ['./occupant-edit.component.css']
})
export class OccupantEditComponent implements OnInit {
	@Input() public occupant: IOccupant;

  constructor(public activeModal: NgbActiveModal, private occupantService: OccupantService) { }

  ngOnInit(): void { }

  onSubmit() {
	  this.occupantService.updateOccupant(this.occupant).subscribe();
	  this.activeModal.close('Form Submission');
  }
}
