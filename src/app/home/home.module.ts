import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeCreateComponent } from './office-create/office-create.component';
import { OfficeEditComponent } from './office-edit/office-edit.component';
import { OfficeDeleteComponent } from './office-delete/office-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
	  HomeComponent,
	  OfficeCreateComponent,
	  OfficeEditComponent,
	  OfficeDeleteComponent
],
  imports: [
	CommonModule,
	FormsModule,
	HomeRoutingModule,
	NgbModule
],
providers:[
	NgbActiveModal
]
})
export class HomeModule { }
