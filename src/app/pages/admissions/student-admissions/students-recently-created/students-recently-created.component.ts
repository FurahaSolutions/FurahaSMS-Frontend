import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-recently-created',
  templateUrl: './students-recently-created.component.html',
  styleUrls: ['./students-recently-created.component.css']
})
export class StudentsRecentlyCreatedComponent {
  @Input() linksTo: string[] = [];
  students$: Observable<any[]> = this.studentsService.getRecentlyCreatedStudents();

  constructor(
    private studentsService: StudentService) {
  }

  getRouterLinks(id: number) {
    if(this.linksTo) {
      return this.linksTo.map(link => link.replace(':id', String(id)));
    }
    return ['/students', id];
  }
}
