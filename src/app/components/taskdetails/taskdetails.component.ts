import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskdetails.component.html',
  styleUrl: './taskdetails.component.css',
})
export class TaskdetailsComponent {
  constructor(private routeService: ActivatedRoute) {
    let taskId = routeService.snapshot.paramMap.get('taskId');
    console.log(taskId);
  }
}
