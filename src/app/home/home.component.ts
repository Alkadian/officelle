import {Component, OnInit, Input} from '@angular/core';
import {OfficeCreateComponent} from './office-create/office-create.component'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	offices = [
		{'name': 'Specno'},
		{'name': 'Spar'},
		{'name': 'Wapp'},
		{'name': 'DigitalHQ'}
	];

	public user = {
		name: 'Izzat Nadiri',
		age: 26
	}

    constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}
	
	openModal() {
		const modalRef = this.modalService.open(OfficeCreateComponent);
		modalRef.componentInstance.user = this.user;
	}

}