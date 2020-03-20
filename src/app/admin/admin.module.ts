import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { ModifyCompanyComponent } from './modify-company/modify-company.component';

@NgModule({
  declarations: [ 
  ModifyUserComponent, ModifyCompanyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatInputModule
    ],
})
export class AdminModule { }
