import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { TeacherService } from '../../admissions/services/teacher.service';

@Component({
  selector: 'app-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.css']
})
export class TeachersDashboardComponent {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  teachers$ = this.teachersService.getActiveTeachers();

  constructor(private teachersService: TeacherService) {
  }
}
