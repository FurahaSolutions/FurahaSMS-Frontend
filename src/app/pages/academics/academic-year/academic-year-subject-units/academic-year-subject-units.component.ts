import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { UnitLevelService } from 'src/app/services/unit-level.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AcademicYearService } from '../../services/academic-year.service';
import { ActivatedRoute } from '@angular/router';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-academic-year-subject-units',
  templateUrl: './academic-year-subject-units.component.html',
  styleUrls: ['./academic-year-subject-units.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcademicYearSubjectUnitsComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  unitLevels: any[] = [];
  selectedUnitLevel = [[]];
  allocationsForm: FormGroup = this.fb.group({
    classLevels: this.fb.array([])
  });
  academicYearId$: Observable<number> = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  classLevels$: Observable<any[]> = this.academicYearId$.pipe(
    mergeMap(academicYearId => this.classLevelService.getAll({includeUnits: 1, includeLevels: 1, academicYearId})),
    takeUntil(this.destroyed$)
  );

  constructor(
    private unitLevelService: UnitLevelService,
    private classLevelService: ClassLevelService,
    private fb: FormBuilder,
    private academicYearService: AcademicYearService,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.classLevels$.subscribe(res => {
      res.forEach(item => {
        this.classLevels.push(
          this.fb.group({
            id: item.id,
            // Problem is Here
            unitLevels: [item.unit_levels.map(({id}: { id: number }) => id)],
            name: [item.name]
          })
        );
      });
    });
    this.unitLevelService.getAll()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.unitLevels = res;
      });
  }

  get classLevels(): FormArray {
    return this.allocationsForm.get('classLevels') as FormArray;
  }

  submitUnitAllocationForm() {
    this.submitInProgressSubject$.next(true);
    this.academicYearId$.pipe(
      mergeMap(id => this.academicYearService.saveUnitLevels(id, this.classLevels.value)),
      takeUntil(this.destroyed$),
      tap(() => this.submitInProgressSubject$.next(false))
    )
      .subscribe();
  }
}
