import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeCreateComponent } from './office-create/office-create.component';


@NgModule({
  declarations: [
	  HomeComponent,
	  OfficeCreateComponent
],
  imports: [
    CommonModule,
	HomeRoutingModule,
	NgbModule
],
providers:[NgbActiveModal]
})
export class HomeModule { }
