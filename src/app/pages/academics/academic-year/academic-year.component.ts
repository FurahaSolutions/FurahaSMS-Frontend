import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AcademicYearService } from '../services/academic-year.service';
import { selectICan } from '../../my-profile/store/selectors/my-profile.selectors';
import { AppState } from '../../../store/reducers';
import { modalMixin } from '../../../shared/mixins/modal.mixin';
import { UndeleteAcademicYearComponent } from './undelete-academic-year/undelete-academic-year.component';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent extends modalMixin() {
  showForm = this.fb.group({
    archived: [undefined],
    deleted: [undefined],
  });
  canViewDeletedAcademicYear$ = this.store.select(selectICan('view deleted academic year'));
  archivedSubject$ = new BehaviorSubject<boolean>(false);
  deletedSubject$ = new BehaviorSubject<boolean>(false);
  archived$ = this.archivedSubject$.pipe(
    mergeMap(archived => archived ? this.academicYearsService.archived$ : of([]))
  );
  deleted$ = this.deletedSubject$.pipe(
    mergeMap(deleted => deleted ? this.academicYearsService.deleted$ : of([]))
  );

  links$: Observable<LinkInterface[]> = this.linkService.academicYearsLinks;
  academicYears$ = combineLatest([
    this.academicYearsService.active$,
    this.archived$,
    this.deleted$
  ]).pipe(
    map((x) => x.flat())
  );
  archiveValueChanges = (this.showForm.get('archived') as FormGroup).valueChanges.pipe(
    tap(x => this.archivedSubject$.next(x))
  );
  deletedValueChanges = (this.showForm.get('deleted') as FormGroup).valueChanges.pipe(
    tap(x => this.deletedSubject$.next(x))
  );

  constructor(
    private linkService: LinkService,
    private academicYearsService: AcademicYearService,
    private fb: FormBuilder,
    public store: Store<AppState>, modalService: BsModalService) {
    super(modalService, store);
  }
  openUndeleteModal(id: number) {
    this.openModal({
      id,
      component: UndeleteAcademicYearComponent
    });
  }
}
