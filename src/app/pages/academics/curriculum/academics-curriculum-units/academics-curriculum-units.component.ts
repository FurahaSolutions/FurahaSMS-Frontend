import { Component } from '@angular/core';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-academics-curriculum-units',
  templateUrl: './academics-curriculum-units.component.html',
  styleUrls: ['./academics-curriculum-units.component.css']
})
export class AcademicsCurriculumUnitsComponent {
  categories = this.unitsService;

  constructor(
    private unitsService: UnitsService
  ) {
  }

}
