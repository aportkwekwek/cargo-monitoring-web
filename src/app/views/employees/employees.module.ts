import { AddEmployeeComponent } from './addemployee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ViewEmployeesComponent } from './viewemployees.component';

// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
 
  ],
  declarations: [
    ViewEmployeesComponent,
    AddEmployeeComponent
  ]
})
  
export class EmployeesModule{ }