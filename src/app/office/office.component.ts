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
	public office_id: string;
	public office: IOffice;
    public occupants = [];

    constructor(private modalService: NgbModal, private route: ActivatedRoute, private officeService: OfficeService, private occupantService: OccupantService) {}

    ngOnInit(): void {
		this.office_id = this.route.snapshot.paramMap.get('office_id');		
		this.officeService.getOffice(this.office_id).subscribe(data => this.office = data);
		this.getOccupants();		
	}

	onFilter(filter) {
		this.getOccupants(filter);		
	}
	
	getOccupants(filter: string = ''){
		this.occupantService.getOccupants(this.office_id, filter).subscribe(data => this.occupants = data);
	}

    openOccupantCreateModal() {
		const modalRef = this.modalService.open(OccupantCreateComponent);
		modalRef.componentInstance.office_id = this.office_id;
		modalRef.result.then( () => this.getOccupants() );
    }

    openOccupantEditModal(occupant_id: string) {
		this.occupantService.getOccupant(occupant_id).subscribe(
			(data) => {
				const modalRef = this.modalService.open(OccupantEditComponent);
				modalRef.componentInstance.occupant = data;
				modalRef.result.then(
					() => this.getOccupants(),
					() => console.log('Error')
				)
			}
		);
    }

    openOccupantDeleteModal(occupant_id: string) {
		this.occupantService.getOccupant(occupant_id).subscribe(
			(data) => {
				const modalRef = this.modalService.open(OccupantDeleteComponent);
				modalRef.componentInstance.occupant = data;
				modalRef.result.then(
					() => this.getOccupants(),
					() => console.log('Error')
				)
			}
		);
    }
}