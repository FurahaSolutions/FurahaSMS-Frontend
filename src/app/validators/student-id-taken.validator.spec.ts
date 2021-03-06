import { TestBed } from '@angular/core/testing';

import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { StudentService } from '../services/student.service';
import { IdNumberValidator } from './student-id-taken.validator';

describe('IdNumberValidator', () => {

  const studentService: StudentService = new StudentService(
    jasmine.createSpyObj({ get: 1 }),
    jasmine.createSpyObj({ dispatch: ()=> true })
  );
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [{
      provide: StudentService,
      useValue: studentService
    }]
  }));

  it('should be created', () => {
    const service: IdNumberValidator = TestBed.inject(IdNumberValidator);
    expect(service).toBeTruthy();
  });
  it('should have function studentIdTaken', () => {
    spyOn(studentService, 'getStudentBySchoolId').and.returnValue(of({ id: 1 }));
    const service: IdNumberValidator = TestBed.inject(IdNumberValidator);
    expect(service.studentIdTaken(new FormControl())).toBeTruthy();
  });
});
