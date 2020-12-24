import { AddEmployeeComponent } from './addemployee.component';
import { ViewEmployeesComponent } from './viewemployees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Employees'
    },
    children: [
      {
        path: '',
        redirectTo: 'view-employees'
      },
      {
        path: 'view-employees',
        component: ViewEmployeesComponent,
        data: {
          title: 'View Employees'
        }
      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent,
        data: {
          title: 'Add Employee'
        }
      }
    ]
  }

]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
