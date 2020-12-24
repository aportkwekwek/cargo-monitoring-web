import { AddTrucksComponent } from './addtrucks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTrucksComponent } from './viewtrucks.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Trucks'
    },
    children: [
      { path: '',
        redirectTo: 'view-trucks'
      },
      {
        path: 'view-trucks',
        component: ViewTrucksComponent,
        data: {
          title:'View Trucks'
        }
        
      },
      {
        path: 'add-trucks',
        component: AddTrucksComponent,
        data: {
          title:'Add Trucks'
        }
      }

    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule {}
