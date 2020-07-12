import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { OccupantCreateComponent } from './occupant-create/occupant-create.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
	  OfficeComponent,
	  OccupantCreateComponent
  ],
  imports: [
    CommonModule,
	OfficeRoutingModule,
	NgbModule,
  ],
  providers:[
	NgbActiveModal
  ]
})
export class OfficeModule { }
