import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcurementService } from 'src/app/services/procurement.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { selectDialogShowState } from 'src/app/store/selectors/dialog.selector';
import { showDialog } from 'src/app/store/actions/dialog.actions';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { CreateProcurementTenderBidComponent } from '../create-procurement-tender-bid/create-procurement-tender-bid.component';
import * as fromStore from '../../../store/reducers';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-procurement-tenders-bids',
  templateUrl: './view-procurement-tenders-bids.component.html',
  styleUrls: ['./view-procurement-tenders-bids.component.css']
})
export class ViewProcurementTendersBidsComponent extends subscribedContainerMixin() {
  procurementRequest$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.procurementService.getProcurementRequestWithId(id)));
  bsModalRef: BsModalRef | undefined;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private store: Store<fromStore.AppState>,
    private procurementService: ProcurementService) {
    super();
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(CreateProcurementTenderBidComponent, this.config);
    this.route.paramMap
      .subscribe(params => {
        (this.bsModalRef as BsModalRef).content.tenderId = Number(params.get('id'));
        this.store.select(selectDialogShowState)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(hide => {
            if(hide) {
              this.bsModalRef?.hide();
              this.store.dispatch(showDialog());
            }
          });
      });
  }
}
