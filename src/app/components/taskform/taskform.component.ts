import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css',
})
export class TaskformComponent {
  taskForm: FormGroup;
  isEditMode: boolean = false;
  editTaskId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService,
    private route: ActivatedRoute
  ) {
    //Create form group and controls
    this.taskForm = formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      task_date: ['', Validators.required],
      priority_level: ['low', Validators.required],
      progress_level: ['', Validators.required],
      depart_id: [1],
    });
    const taskId = this.route.snapshot.paramMap.get('taskId');

    if (taskId) {
      this.isEditMode = true;
      this.editTaskId = parseInt(taskId);

      this.taskService.getTask(this.editTaskId).subscribe((result) => {
        this.taskForm.patchValue(result); // Populate web from with database data
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.updateTask();
    } else {
      this.createTask();
    }
  }
  createTask() {
    const formData = this.taskForm.value;
    this.taskService.createTask(formData).subscribe((result) => {
      console.log(result);
      alert('Task was created successfully');
      this.taskForm.reset();
    });
  }
  updateTask() {
    const formData = this.taskForm.value;
    this.taskService
      .updateTask(this.editTaskId, formData)
      .subscribe((result) => {
        console.log(result);
        alert('Task was updated successfully');
      });
  }
}
