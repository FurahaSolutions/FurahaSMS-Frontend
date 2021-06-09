import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { modalMixin } from 'src/app/shared/mixins/modal.mixin';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { TimeTableService } from '../../services/time-table.service';
import { CreateAcademicYearTimeTableComponent } from '../create-academic-year-time-table/create-academic-year-time-table.component';

@Component({
  selector: 'app-time-table-academic-year-dashboard',
  templateUrl: './time-table-academic-year-dashboard.component.html',
  styleUrls: ['./time-table-academic-year-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableAcademicYearDashboardComponent extends modalMixin() {
  faPlusCircle = faPlusCircle;
  faClock = faClock;
  academicYearId: number | undefined;

  academicYearId$: Observable<number> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.academicYearId = id)
  );
  academicYear$: Observable<any> = this.academicYearId$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({id}))
  );
  timeTables$: Observable<any[]> = this.academicYearId$.pipe(
    mergeMap(id => this.timeTableService.getForAcademicYear(id))
  );

  constructor(
    modalService: BsModalService, store: Store,
    private route: ActivatedRoute,
    private academicYearService: AcademicYearService,
    private timeTableService: TimeTableService
  ) {
    super(modalService, store);
  }

  newTimeTablePlan() {
    this.openModal({id: this.academicYearId as number, component: CreateAcademicYearTimeTableComponent});
  }

}
