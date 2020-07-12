import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
	public occupants = ['a', 's', 'd', 'f', 'g', 'h'];
  	constructor() { }

  	ngOnInit(): void {
  	}

}
