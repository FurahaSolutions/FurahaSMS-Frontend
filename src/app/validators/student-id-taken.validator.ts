import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StudentService } from '../services/student.service';

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
