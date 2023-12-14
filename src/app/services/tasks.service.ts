import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Itask[]>('http://localhost:3000/tasks');
  }

  createTask(formData: any) {
    return this.http.post<Itask>('http://localhost:3000/tasks', formData);
  }

  //Get record of a particular task
  getTask(taskId: number) {
    return this.http.get<Itask>(`http://localhost:3000/tasks/${taskId}`);
  }

  updateTask(taskId: number, body: any) {
    return this.http.put<Itask>(`http://localhost:3000/tasks/${taskId}`, body);
  }

  deleteTask(taskId: number) {
    return this.http.delete<Itask>(`http://localhost:3000/tasks/${taskId}`);
  }
}
