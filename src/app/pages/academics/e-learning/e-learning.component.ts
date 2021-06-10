import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faListAlt } from '@fortawesome/free-solid-svg-icons/faListAlt';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { LinkInterface } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.css']
})
export class ELearningComponent {
  links$: Observable<LinkInterface[]> = of([
    {name: 'View Courses', icon: faListAlt, link: 'academics/e-learning/courses'},
    {name: 'Admin', icon: faUserSecret, link: 'academics/e-learning/admin'},
  ]);

  constructor() {
  }

}
