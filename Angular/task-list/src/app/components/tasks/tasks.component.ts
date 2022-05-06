import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];


  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    // Like promise
    this.taskService.getTasks().subscribe( (tasks)=>{
      this.tasks = tasks;
    });
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)  //Devuelve todos los resultados que son distinto a ese valor
    })
  }

}
