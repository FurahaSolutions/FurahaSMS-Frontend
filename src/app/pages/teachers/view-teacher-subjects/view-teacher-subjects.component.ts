import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { TeacherSubjectService } from '../services/teacher-subject.service';
import { UnitsService } from '../../../services/units.service';

@Component({
  selector: 'app-view-teacher-subjects',
  templateUrl: './view-teacher-subjects.component.html',
  styleUrls: ['./view-teacher-subjects.component.css']
})
export class ViewTeacherSubjectsComponent {
  faEdit = faEdit;
  faCheck = faCheck;
  teacherId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  teaches$: Observable<any[]> = this.teacherId$.pipe(
    mergeMap(id => this.teacherSubjectService.getSubjects(id))
  );
  units$ = this.unitsService.all$;
  teacherUnits$ = combineLatest([this.teaches$, this.units$]).pipe(
    map(
      ([teaches, units]) =>
        units.filter(({id}) =>
          teaches.map(({unit_id: unitId}) => unitId).includes(id)
        ).map(item => ({
            id: item.id,
            name: item.name,
            abbr: item.abbreviation,
            levels: teaches.filter(({unit_id: unitId}) => unitId === item.id)
          })
        )
    )
  );

  constructor(
    private route: ActivatedRoute,
    private teacherSubjectService: TeacherSubjectService,
    private unitsService: UnitsService
  ) {
  }
}
