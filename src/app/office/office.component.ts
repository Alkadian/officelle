import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantCreateComponent } from './occupant-create/occupant-create.component';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';
import { OccupantDeleteComponent } from './occupant-delete/occupant-delete.component';
import { OccupantService } from '../services/occupant.service';
import { ActivatedRoute } from '@angular/router';
import { OfficeService } from '../services/office.service';
import { IOffice } from '../interfaces/office';
import { IOccupant } from '../interfaces/occupant';

@Component({
    selector: 'app-office',
    templateUrl: './office.component.html',
    styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
	public office: IOffice;
    public occupants: IOccupant[] = [];

    constructor(private modalService: NgbModal, private route: ActivatedRoute, private officeService: OfficeService, private occupantService: OccupantService) {}

    ngOnInit(): void {
		let office_id = this.route.snapshot.paramMap.get('office_id');
		this.officeService.getOffice(office_id).subscribe(data => this.office = data);
		this.getOccupants(office_id);
	}
	
	getOccupants(office_id){
		this.occupantService.getOccupants().subscribe(data => this.occupants = data);
	}

    openOccupantCreateModal() {
        const modalRef = this.modalService.open(OccupantCreateComponent);
    }

    openOccupantEditModal() {
        const modalRef = this.modalService.open(OccupantEditComponent);
    }

    openOccupantDeleteModal() {
        const modalRef = this.modalService.open(OccupantDeleteComponent);
    }
}