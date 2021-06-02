import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {selectTeacher} from '../store/selectors/teacher-profile.selectors';
import {map, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GenderService} from 'src/app/services/gender.service';
import {ReligionService} from 'src/app/services/religion.service';
import {selectGenders, selectReligions} from 'src/app/store/selectors/app.selectors';
import {loadTeacherProfilesSuccess} from '../store/actions/teacher-profile.actions';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-teacher-info',
  templateUrl: './view-teacher-info.component.html',
  styleUrls: ['./view-teacher-info.component.css']
})
export class ViewTeacherInfoComponent extends subscribedContainerMixin() implements OnInit {
  teacherId: number | undefined;
  teacherProfile$ = this.route.parent?.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.teacherId = id),
    mergeMap((id) => this.store.pipe(select(selectTeacher(id))))
  );
  genders$: Observable<any[]> = this.store.pipe(select(selectGenders));
  religions$: Observable<any[]> = this.store.pipe(select(selectReligions));

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private genderService: GenderService,
    private religionService: ReligionService
  ) {
    super();
  }

  ngOnInit() {
    this.genderService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
    this.religionService.loadAll$.pipe(takeUntil(this.destroyed$)).subscribe();
  }

  changeProfile({fieldName, fieldNewValue}: { fieldName: string; fieldNewValue: string }) {
    this.store.dispatch(loadTeacherProfilesSuccess({
      data: {
        id: this.teacherId as number,
        [fieldName]: fieldNewValue,
      }
    }));
  }

  updateSelectValue({key, id, name}: { key: string; id: number; name: string }) {
    this.store.dispatch(loadTeacherProfilesSuccess({
      data: {
        id: this.teacherId as number,
        [key + '_id']: id,
        [key + '_name']: name,
      }
    }));
  }
}
