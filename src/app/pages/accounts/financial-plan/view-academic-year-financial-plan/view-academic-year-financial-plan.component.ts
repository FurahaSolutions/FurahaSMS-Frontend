import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { selectPlanForAcademicYearWithId } from '../store/selectors/academic-year-plan.selectors';
import { AcademicYearService } from '../../../academics/services/academic-year.service';

@Component({
  selector: 'app-view-academic-year-financial-plan',
  templateUrl: './view-academic-year-financial-plan.component.html',
  styleUrls: ['./view-academic-year-financial-plan.component.css']
})
export class ViewAcademicYearFinancialPlanComponent {
  faChevronRight = faChevronRight;
  faEdit = faEdit;
  academicYearPlanId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
  );
  academicYearPlan$: Observable<any> = this.academicYearPlanId$.pipe(
    mergeMap(id => this.store.pipe(select(selectPlanForAcademicYearWithId(id))))
  );

  semesters$ = this.academicYearPlanId$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithSemesters(id)),
    map(({semesters}) => semesters)
  );
  academicYear$ = this.academicYearPlan$.pipe(
    map((plan) => plan?.academicYear)
  );
  formattedPlan$: Observable<any[]> = this.academicYearPlan$.pipe(
    map((plan) => (plan ? plan.financialYearPlan : {})),
    map(({tuitionFee, otherFees}) =>
      tuitionFee?.map((fee: any) => ({
          ...fee,
          tuitionSemTotals: fee.semTotals,
          tuitionTotals: fee.total,
          ...otherFees.find(({classLevelId}: any) => classLevelId === fee.classLevelId),
        })
      ).map((item: any) => ({...item, totals: item.total + item.tuitionTotals}))
    ),
  );

  v$ = combineLatest([this.academicYear$, this.formattedPlan$, this.semesters$]).pipe(
    map(([academicYear, financialPlan, semesters]) => ({academicYear, financialPlan, semesters}))
  );


  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private academicYearService: AcademicYearService
  ) {
  }

}
