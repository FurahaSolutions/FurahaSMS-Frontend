import { Component, OnInit } from '@angular/core';

import { noop, Observable, Observer, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';
import { StudentService } from 'src/app/services/student.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  search = '';
  suggestions$: Observable<IUserProfile[]> = of([]);
  errorMessage: string | undefined;
  selectedItemSubject$ = new Subject<IUserProfile>();
  selectedItemAction$ = this.selectedItemSubject$.asObservable();


  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {

        if (query) {

          return this.studentService.getStudentByName(query)
            .pipe(
              tap(() => noop, err => {
                this.errorMessage = err && err.message || 'Something goes wrong';
              })
            );
        }

        return of([]);
      })
    );
  }

  onSelect(event: TypeaheadMatch) {
    this.selectedItemSubject$.next(event.item);
  }
}
