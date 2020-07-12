import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-occupant-edit',
  templateUrl: './occupant-edit.component.html',
  styleUrls: ['./occupant-edit.component.css']
})
export class OccupantEditComponent implements OnInit {
	@Input() public occupant;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
