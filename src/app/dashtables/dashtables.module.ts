import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule, MatInputModule } from '@angular/material';




@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashtablesModule { }
