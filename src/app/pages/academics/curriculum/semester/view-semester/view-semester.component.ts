import { Component } from '@angular/core';
import { SemesterService } from '../services/semester.service';

@Component({
  selector: 'app-view-semester',
  templateUrl: './view-semester.component.html',
  styleUrls: ['./view-semester.component.css']
})
export class ViewSemesterComponent {

  constructor(public semesterService: SemesterService) {
  }


}
