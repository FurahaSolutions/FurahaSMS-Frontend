import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcurementService } from 'src/app/services/procurement.service';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-approve-procurement-request',
  templateUrl: './approve-procurement-request.component.html',
  styleUrls: ['./approve-procurement-request.component.css']
})
export class ApproveProcurementRequestComponent extends subscribedContainerMixin() {
  faSpinner = faSpinner;
  procurementItems$ = this.procurementService.getRequestsPendingApproval();
  isOpen = [false];
  isApproving: boolean[] = [false];
  isRejecting: boolean[] = [false];
  isApprovingSubject$ = new BehaviorSubject([false]);
  isRejectingSubject$ = new BehaviorSubject([false]);
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
    super();
  }

  approve(procurementItemId: number, i: number) {
    this.isApproving[i] = true;
    this.procurementService.approveRequest({['procurement_request_id']: procurementItemId, approve: true})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
        this.isApproving[i] = false;
      });

  }

  reject(procurementItemId: number, i: number) {
    this.isRejecting[i] = true;
    this.procurementService.approveRequest({['procurement_request_id']: procurementItemId, approve: false})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isRejecting[i] = false;
        this.procurementItems$ = this.procurementService.getRequestsPendingApproval();
      });
  }

}
