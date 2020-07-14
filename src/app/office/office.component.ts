import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantCreateComponent } from './occupant-create/occupant-create.component';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';
import { OccupantDeleteComponent } from './occupant-delete/occupant-delete.component';
import { OccupantService } from '../services/occupant.service';

@Component({
    selector: 'app-office',
    templateUrl: './office.component.html',
    styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
    public occupants = [];

    constructor(private modalService: NgbModal, private occupantService: OccupantService) {}

    ngOnInit(): void {
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