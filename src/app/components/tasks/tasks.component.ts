import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interfaces/itask';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks!: Itask[];

  constructor(private tasksService: TasksService) {
    tasksService.getTasks().subscribe((result) => {
      this.tasks = result;
    });
  }
  ngOnInit() {}

  deleteTask(taskId: number) {
    //Get the array index of the text
    const index = this.tasks.findIndex((task) => {
      return task.id === taskId;
    });

    //Remove task object from array
    this.tasks.splice(index, 1);

    // Remove task from database
    this.tasksService.deleteTask(taskId).subscribe((result) => {
      alert('Student was deleted successfully');
    });
  }
}
