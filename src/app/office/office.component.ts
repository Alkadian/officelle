import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantCreateComponent } from './occupant-create/occupant-create.component';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
	public occupants = ['a', 's', 'd', 'f', 'g', 'h'];

  	constructor(private modalService: NgbModal) { }

	  ngOnInit(): void {}
	  
	  openOccupantCreateModal(){
		const modalRef = this.modalService.open(OccupantCreateComponent);
	  }

	  openOccupantEditModal(){
		const modalRef = this.modalService.open(OccupantEditComponent);
	  }

}
