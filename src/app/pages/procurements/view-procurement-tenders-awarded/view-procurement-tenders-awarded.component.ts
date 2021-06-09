import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcurementService } from 'src/app/services/procurement.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { selectDialogShowState } from 'src/app/store/selectors/dialog.selector';
import { showDialog } from 'src/app/store/actions/dialog.actions';
import { takeUntil} from 'rxjs/operators';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FulfillOrRejectTenderFormComponent } from '../fulfill-or-reject-tender-form/fulfill-or-reject-tender-form.component';
import * as fromStore from '../../../store/reducers';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-procurement-tenders-awarded',
  templateUrl: './view-procurement-tenders-awarded.component.html',
  styleUrls: ['./view-procurement-tenders-awarded.component.css']
})
export class ViewProcurementTendersAwardedComponent extends subscribedContainerMixin() {
  faEye = faEye;
  faCheck = faCheck;
  faTimes = faTimes;
  procurementTenders$ = this.procurementService.getAwardedTenders();
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };
  bsModalRef: BsModalRef | undefined;

  constructor(
    private modalService: BsModalService,
    private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
    super();
  }

  openModalWithComponent(tenderId: number, fulfilled: boolean) {
    this.bsModalRef = this.modalService.show(FulfillOrRejectTenderFormComponent, this.config);
    this.bsModalRef.content.tenderId = tenderId;
    this.bsModalRef.content.fulfilled = fulfilled;
    this.store.select(selectDialogShowState)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(hide => {
      if (hide) {
        this.bsModalRef?.hide();
        this.store.dispatch(showDialog());
      }
    });
  }
}
