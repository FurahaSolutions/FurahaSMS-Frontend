import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-academics-curriculum',
  templateUrl: './academics-curriculum.component.html',
  styleUrls: ['./academics-curriculum.component.css']
})
export class AcademicsCurriculumComponent {

  faChevronRight = faChevronRight;
  links$: Observable<LinkInterface[]> = this.linkService.academicCurriculumLinks;

  constructor(private linkService: LinkService) {
  }

}
