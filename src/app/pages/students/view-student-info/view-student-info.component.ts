import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { selectStudent } from '../store/selectors/student-profile.selectors';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';
import { selectGenders, selectReligions } from 'src/app/store/selectors/app.selectors';
import { loadStudentProfilesSuccess } from '../store/actions/student-profile.actions';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-student-info',
  templateUrl: './view-student-info.component.html',
  styleUrls: ['./view-student-info.component.css']
})
export class ViewStudentInfoComponent extends subscribedContainerMixin() implements OnInit {
  genders$  = this.store.pipe(select(selectGenders));
  religions$ = this.store.pipe(select(selectReligions));
  studentId: number | undefined;
  student$= (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.studentId = id),
    mergeMap(id => this.store.pipe(select(selectStudent(id))))
  );

  constructor(
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
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
    this.store.dispatch(loadStudentProfilesSuccess({
      data: {
        id: this.studentId as number,
        [fieldName]: fieldNewValue,
      }
    }));
  }

  updateSelectValue(fieldName: string, $event: { id: number; name: string }) {

    this.store.dispatch(loadStudentProfilesSuccess({
      data: {
        id: this.studentId as number,
        [fieldName + '_id']: $event.id,
        [fieldName + '_name']: $event.name
      }
    }));

  }
}
