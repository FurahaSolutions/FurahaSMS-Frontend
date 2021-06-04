import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.css']
})
export class ELearningComponent {
  links$ = of([
    {name: 'View Courses', icon: 'icon-docs', link: 'academics/e-learning/courses'},
    {name: 'Admin', icon: 'icon-user-secret', link: 'academics/e-learning/admin'},
  ]);

  constructor() {
  }

}
