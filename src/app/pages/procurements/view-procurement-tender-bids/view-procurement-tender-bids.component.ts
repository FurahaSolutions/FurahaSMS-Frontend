import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcurementService } from 'src/app/services/procurement.service';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { takeUntil } from 'rxjs/operators';
import * as fromStore from '../../../store/reducers';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-procurement-tender-bids',
  templateUrl: './view-procurement-tender-bids.component.html',
  styleUrls: ['./view-procurement-tender-bids.component.css']
})
export class ViewProcurementTenderBidsComponent extends subscribedContainerMixin() implements OnInit {
  // @Input() procurementRequestId;
  // bids$: Observable<any>;
  @Input() items: any[] = [];
  bids: any[] = [];
  isOpen = [false];
  awarding = [false];
  isAwarded = false;

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
    super();
  }

  ngOnInit() {
    this.bids = this.items;
    this.isAwarded = this.bids.every(bid => bid.awarded);
  }

  awardBidTo(tenderId: number, bidId: number, i: number) {
    this.awarding[i] = true;
    const data = {
      awarded: true
    };
    this.procurementService.awardBid({tenderId, bidId, data})
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: 'Bid Successfully awarded',
          toastHeader: 'Success',
          toastTime: 'Just Now'
        }));
        this.awarding[i] = false;
      }, () => this.awarding[i] = true);
  }
}
