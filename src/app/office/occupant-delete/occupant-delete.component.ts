import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-occupant-delete',
  templateUrl: './occupant-delete.component.html',
  styleUrls: ['./occupant-delete.component.css']
})
export class OccupantDeleteComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
