import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css']
})
export class OfficeDeleteComponent implements OnInit {
	@Input() public user;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
		console.log(this.user);
	}

}
