import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent {

  task : Task =  {
    name: "",
    value: 0,
    date_launch: '2019-09-05'
  };

  tasks : Array<Task>;
  constructor(private taskService : TaskService) {
    this.tasks = this.taskService.tasks;
  }

  add() {
    //Copia o objeto
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }
}
