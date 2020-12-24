import { NewTaskComponent } from './newtask.component';
import { ViewTasksComponent } from './tasks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Tasks'
    },
    children: [
      { path: '',
        redirectTo: 'view-tasks'
      },
      {
        path: 'view-tasks',
        component: ViewTasksComponent,
        data: {
          title:'View Tasks'
        }
        
      },
      {
        path: 'new-task',
        component: NewTaskComponent,
        data: {
          title:'New Task'
        }
      }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrGenRoutingModule {}
