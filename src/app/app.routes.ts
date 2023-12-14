import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskformComponent } from './components/taskform/taskform.component';
import { HomeComponent } from './components/home/home.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:taskId', component: TaskdetailsComponent },
  { path: 'create-task', component: TaskformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit-task/:taskId', component: TaskformComponent },
  { path: '**', component: NotfoundComponent },
];
