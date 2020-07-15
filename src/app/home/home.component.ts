import { Component, OnInit } from '@angular/core';
import { OfficeCreateComponent } from './office-create/office-create.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeEditComponent } from './office-edit/office-edit.component';
import { OfficeDeleteComponent } from './office-delete/office-delete.component';
import { OfficeService } from '../services/office.service';
import { ResponseService } from '../services/response.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public offices = [];

    constructor(private modalService: NgbModal, private officeService: OfficeService, private response: ResponseService) {}

	ngOnInit(): void {		
		this.getOffices();
	}

	getOffices() {
		this.officeService.getOffices().subscribe(
			(data) => { this.offices = data }
		);
	}
	
	openOfficeCreateModal() {
		const modalRef = this.modalService.open(OfficeCreateComponent);
		modalRef.result.then( 
			() => {
				this.getOffices()
				this.response.successHandler('Office Successfuly created');
			},
			(response) => {
				if (response) {
					this.response.errorHandler(response);
				}
			} 
		);
	}

	openOfficeEditModal(office_id: string) {		
		this.officeService.getOffice(office_id).subscribe(
			data => {
				const modalRef = this.modalService.open(OfficeEditComponent);
				modalRef.componentInstance.office = data;
				modalRef.result.then( 
					() => {
						this.getOffices()
						this.response.successHandler('Office Successfuly updated');
					},
					(response) => {
						if (response) {
							this.response.errorHandler(response);
						}
					} 
				);
			} 
		);
	}
	
	openOfficeDeleteModal(office_id: string) {
		this.officeService.getOffice(office_id).subscribe(
			data => {
				const modalRef = this.modalService.open(OfficeDeleteComponent);
				modalRef.componentInstance.office = data;
				modalRef.result.then( 
					() => {
						this.getOffices()
						this.response.successHandler('Office Successfuly deleted');
					},
					(response) => {
						if (response) {
							this.response.errorHandler(response);
						}
					} 
				);
			}
		);
	}

}