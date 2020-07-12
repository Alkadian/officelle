import {Component,OnInit, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-office-create',
    templateUrl: './office-create.component.html',
    styleUrls: ['./office-create.component.css']
})
export class OfficeCreateComponent implements OnInit {
	@Input() public user;
	
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
		console.log(this.user);
	}
}