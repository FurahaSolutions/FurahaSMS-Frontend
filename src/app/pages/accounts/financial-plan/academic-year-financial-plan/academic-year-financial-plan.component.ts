import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadAcademicYearPlans } from '../store/actions/academic-year-plan.actions';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-academic-year-financial-plan',
  templateUrl: './academic-year-financial-plan.component.html',
  styleUrls: ['./academic-year-financial-plan.component.css']
})
export class AcademicYearFinancialPlanComponent extends subscribedContainerMixin() implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private academicYear: AcademicYearService,
    private store: Store<AppState>
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.pipe(map(params => Number(params.get('id')))).pipe(
      takeUntil(this.destroyed$),
      mergeMap(id => this.academicYear.getAcademicYearWithId({id})))
      .subscribe(academicYear => {
        this.store.dispatch(loadAcademicYearPlans(academicYear));
      });
  }
}
