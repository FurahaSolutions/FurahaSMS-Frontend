import { Component } from '@angular/core';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

@Component({
  selector: 'app-academic-year-archives',
  templateUrl: './academic-year-archives.component.html',
  styleUrls: ['./academic-year-archives.component.css']
})
export class AcademicYearArchivesComponent {
  faInfoCircle = faInfoCircle;
  academicYears$: Observable<any> = this.academicYearService.archived$;

  constructor(private academicYearService: AcademicYearService) {
  }

}
