import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { closeDialog } from 'src/app/store/actions/dialog.actions';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';
import { takeUntil, tap } from 'rxjs/operators';
import * as fromStore from '../../../store/reducers';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-procurement-tender-bid',
  templateUrl: './create-procurement-tender-bid.component.html',
  styleUrls: ['./create-procurement-tender-bid.component.css']
})
export class CreateProcurementTenderBidComponent extends subscribedContainerMixin(formMixin()) {
  @Input() tenderId = 0;
  newBidForm = this.fb.group({
    vendorName: ['', [Validators.required]],
    unitDescription: ['', [Validators.required]],
    pricePerUnit: ['', [Validators.required]],
    description: ['']
  });
  errorBody$ = this.store.select(selectErrorState);

  constructor(
    private procurementService: ProcurementService,
    private store: Store<fromStore.AppState>, private fb: FormBuilder) {
    super();
  }

  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }

  closeDialog() {
    const dialogCloseConfirmed = confirm('Are you sure you wish to close add bid form?');
    if(dialogCloseConfirmed) {
      this.store.dispatch(closeDialog());
    }
  }

  submitNewBidForm() {
    this.submitInProgressSubject$.next(true);
    const data = {data: this.newBidForm.value, tenderId: this.tenderId};
    this.procurementService.createBid(data).pipe(
      takeUntil(this.destroyed$),
      tap(() => this.submitInProgressSubject$.next(false))
    ).subscribe({
      next: () => this.store.dispatch(closeDialog())
    });
  }
}
