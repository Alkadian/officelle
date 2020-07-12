import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.css']
})
export class OfficeEditComponent implements OnInit {
	@Input() public user;

  	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
		console.log(this.user);
	}

}
