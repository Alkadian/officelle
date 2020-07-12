import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';
import { OccupantCreateComponent } from './occupant-create/occupant-create.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';
import { OccupantDeleteComponent } from './occupant-delete/occupant-delete.component';


@NgModule({
  declarations: [
	  OfficeComponent,
	  OccupantCreateComponent,
	  OccupantEditComponent,
	  OccupantDeleteComponent
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
