import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  photo: String =
    'https://hips.hearstapps.com/hmg-prod/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=0.8337777777777778xw:1xh;center,top&resize=1200:*';
  photo1: String =
    'https://hips.hearstapps.com/hmg-prod/images/gettyimages-460682111-653a8f87b3c7e.jpg?crop=1.00xw:0.899xh;0,0&resize=1200:*';
  photo2: String =
    'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyN3x8d2ludGVyfGVufDB8fHx8MTY4NjYyOTE0MHww&ixlib=rb-4.0.3&fm=jpg&w=5401&h=3601&fit=max&size=*:900';

  constructor() {}

  ngOnInit() {}
}
