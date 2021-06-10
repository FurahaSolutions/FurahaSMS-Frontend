import { Component, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';

@Component({
  selector: 'app-e-learning-course',
  templateUrl: './e-learning-course.component.html',
  styleUrls: ['./e-learning-course.component.css']
})
export class ELearningCourseComponent {
  @Input() course: any;
  @Input() edit = false;
  faEdit = faEdit;
  faFolderOpen = faFolderOpen;

  constructor() {
  }

}
