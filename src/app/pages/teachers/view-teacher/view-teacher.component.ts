import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { TeacherService } from '../../admissions/services/teacher.service';
import { loadTeacherProfiles, loadTeacherProfilesSuccess } from '../store/actions/teacher-profile.actions';
import { selectTeacher } from '../store/selectors/teacher-profile.selectors';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent {
  faExclamationTriangle = faExclamationTriangle;
  teacherProfile$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.teacherId = id),
    tap(id => this.store.dispatch(loadTeacherProfiles({data: {id}}))),
    mergeMap(id => this.store.pipe(select(selectTeacher(id)))));
  teacherId: number | undefined;

  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  changeProfile($event: { fieldName: string; fieldNewValue: string }) {
    this.store.dispatch(loadTeacherProfilesSuccess({
      data: {
        id: this.teacherId as number,
        [$event.fieldName]: $event.fieldNewValue
      }
    }));
  }

}
