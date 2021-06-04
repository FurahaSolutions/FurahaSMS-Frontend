import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StudentService } from '../services/student.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdNumberValidator {
  constructor(private studentService: StudentService) {
  }

  studentIdTaken(control: AbstractControl): any {

    return this.studentService.getStudentBySchoolId(control.value).pipe(
      map(data => data.id ? {['id_taken']: true} : null)
    );
  }

}
