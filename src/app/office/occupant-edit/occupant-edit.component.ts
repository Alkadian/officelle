import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantService } from 'src/app/services/occupant.service';

@Component({
  selector: 'app-occupant-edit',
  templateUrl: './occupant-edit.component.html',
  styleUrls: ['./occupant-edit.component.css']
})
export class OccupantEditComponent implements OnInit {
	@Input() public occupant;

  constructor(public activeModal: NgbActiveModal, private occupantService: OccupantService) { }

  ngOnInit(): void { }

  onSubmit() {
	  this.occupantService.updateOccupant(this.occupant);
  }
}
