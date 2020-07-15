import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OfficeCreateComponent } from './office-create/office-create.component';
import { OfficeEditComponent } from './office-edit/office-edit.component';
import { OfficeDeleteComponent } from './office-delete/office-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from "ngx-color-picker";
import { NgxMaskModule, IConfig } from 'ngx-mask';

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
	  HomeComponent,
	  OfficeCreateComponent,
	  OfficeEditComponent,
	  OfficeDeleteComponent,
],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	HomeRoutingModule,
	NgbModule,
	ColorPickerModule,
	NgxMaskModule.forRoot(),
],
providers:[
	NgbActiveModal
]
})
export class HomeModule { }
