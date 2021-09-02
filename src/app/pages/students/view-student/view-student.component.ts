import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StudentProfileStateInterface } from 'src/app/store/reducers/student-profile-update.reducer';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import * as fromStore from '../../../store/reducers';
import { loadStudentProfiles, loadStudentProfilesSuccess } from '../store/actions/student-profile.actions';
import { selectStudent } from '../store/selectors/student-profile.selectors';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  faExclamationTriangle = faExclamationTriangle;
  student$: Observable<StudentProfileStateInterface | { user: string }> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.store.dispatch(loadStudentProfiles({data: {id}}))),
    tap(id => this.studentId = id),
    mergeMap(id => this.store.select(selectStudent(id))),
    map(profile => profile as StudentProfileStateInterface)
  );
  fullName = '';
  studentId: number | undefined;

  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
  ) {
  }

  changeProfile(event: { fieldName: string; fieldNewValue: string } | Event) {
    const eventTemp = event as { fieldName: string; fieldNewValue: string };
    if (eventTemp.fieldName) {
      this.store.dispatch(loadStudentProfilesSuccess(
        {data: {id: this.studentId as number, [eventTemp.fieldName]: eventTemp.fieldNewValue}}));
    }

  }

}
