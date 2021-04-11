import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';
import {AcademicYearService} from '../services/academic-year.service';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent {

  links$: Observable<LinkInterface[]> = this.linkService.academicYearsLinks;
  academicYears$ = this.academicYearsService.active$;
  constructor(private linkService: LinkService, private academicYearsService: AcademicYearService ) { }

}
