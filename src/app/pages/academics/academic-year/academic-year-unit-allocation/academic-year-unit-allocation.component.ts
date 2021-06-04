import { Component } from '@angular/core';
import { AcademicYearService } from '../../services/academic-year.service';

@Component({
  selector: 'app-academic-year-unit-allocation',
  templateUrl: './academic-year-unit-allocation.component.html',
  styleUrls: ['./academic-year-unit-allocation.component.css']
})
export class AcademicYearUnitAllocationComponent {
  academicYears$ = this.academicYear.all$;
  selectedAcademicYear: number | undefined;

  constructor(private academicYear: AcademicYearService) {
  }

}
