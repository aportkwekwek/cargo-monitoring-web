import { Tasks } from './../../_classes/tasks';
import { Drivers } from './../../_services/user.service';
import { TasksService } from './../../_services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'tasks.component.html'
})
export class ViewTasksComponent implements OnInit{

  _tasks: Tasks[] = [];

  constructor(
    private _taskService: TasksService,
    
  ) { }


  ngOnInit() {
    this._taskService.getTasks().subscribe(
      data => {
        this._tasks = data;
      }, error => {
        console.log(error);
      }
    );

  }

}
