import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-learning-course',
  templateUrl: './e-learning-course.component.html',
  styleUrls: ['./e-learning-course.component.css']
})
export class ELearningCourseComponent {
  @Input() course: any;
  @Input() edit = false;

  constructor() {
  }

}
