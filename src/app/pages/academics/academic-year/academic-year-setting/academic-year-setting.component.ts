import { Component } from '@angular/core';
import { AcademicYearService } from '../../services/academic-year.service';
import { Store } from '@ngrx/store';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { selectICan } from '../../../my-profile/store/selectors/my-profile.selectors';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { modalMixin } from '../../../../shared/mixins/modal.mixin';
import { CloseAcademicYearSectionComponent } from '../close-academic-year-section/close-academic-year-section.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DeleteAcademicYearComponent } from '../delete-academic-year/delete-academic-year.component';
import { ArchiveAcademicYearComponent } from '../archive-academic-year/archive-academic-year.component';

@Component({
  selector: 'app-academic-year-setting',
  templateUrl: './academic-year-setting.component.html',
  styleUrls: ['./academic-year-setting.component.css']
})
export class AcademicYearSettingComponent extends modalMixin() {
  academicYearId = 0;
  academicYearId$ = ((this.route.parent as ActivatedRoute).parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.academicYearId = id)
  );
  academicYear$ = this.academicYearId$.pipe(
    mergeMap(id => this.academicYearService.getAcademicYearWithId({id}))
  );
  archivableItems$ = this.academicYearId$.pipe(
    switchMap(id => this.academicYearService.archivableItemsForAcademicYearWithId(id)),
    mergeMap(archivableItems => combineLatest(archivableItems.map(
      ({permissionName, ...rest}) => this.store.select(selectICan(permissionName)).pipe(
        map(allowed => ({...rest, allowed}))
      ))
      )
    )
  );
  v$ = combineLatest([this.academicYear$, this.archivableItems$]).pipe(
    map(([academicYear, archivableItems]) =>({academicYear, archivableItems}))
  );

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute, private academicYearService: AcademicYearService,
    private store: Store) {
    super(modalService, store);
  }

  openSaveModal({isOpen, slug, name}: { isOpen: boolean; slug: string; name: string }) {
    this.openModal({
      id: this.academicYearId,
      params: {isOpen, slug, name},
      component: CloseAcademicYearSectionComponent
    });
  }

  openArchiveModal() {
    this.openModal({
      id: this.academicYearId,
      params: { archive: true},
      component: ArchiveAcademicYearComponent
    });
  }

  openUnarchiveModal() {
    this.openModal({
      id: this.academicYearId,
      params: { archive: false},
      component: ArchiveAcademicYearComponent
    });
  }

  openDeleteModal() {
    this.openModal({
      id: this.academicYearId,
      component: DeleteAcademicYearComponent
    });
  }
}
