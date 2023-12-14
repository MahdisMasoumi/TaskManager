import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interfaces/itask';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Itask;
  @Output() deleteEvent = new EventEmitter(); //creating a custom event

  constructor(private route: ActivatedRoute) {}

  ngOnChanges(value: SimpleChanges) {
    console.log('change');
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this task')) {
      this.deleteEvent.emit(this.task.id); //trigger the deleteEvent
    }
  }
}
