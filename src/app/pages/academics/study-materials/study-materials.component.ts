import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import { faArchive } from '@fortawesome/free-solid-svg-icons/faArchive';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { LinkInterface } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-study-materials',
  templateUrl: './study-materials.component.html',
  styleUrls: ['./study-materials.component.css']
})
export class StudyMaterialsComponent {

  links$: Observable<LinkInterface[]> = of([
    {
      name: 'Archives',
      icon: faArchive,
      link: 'academics/study-materials/archives'
    },
    {
      name: 'Admin',
      icon: faUserSecret,
      link: 'academics/study-materials/admin'
    },
  ]);

}
