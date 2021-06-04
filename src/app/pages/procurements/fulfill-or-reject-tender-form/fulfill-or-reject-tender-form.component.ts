import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { FormBuilder, Validators } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { closeDialog } from 'src/app/store/actions/dialog.actions';
import { takeUntil } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-fulfill-or-reject-tender-form',
  templateUrl: './fulfill-or-reject-tender-form.component.html',
  styleUrls: ['./fulfill-or-reject-tender-form.component.css']
})
export class FulfillOrRejectTenderFormComponent extends subscribedContainerMixin(formMixin()) {
  @Input() fulfilled = false;
  @Input() tenderId: boolean | undefined;
  fulfilledTenderForm = this.fb.group({
    comment: ['', [Validators.required]],
  });

  constructor(
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private procurementService: ProcurementService
  ) {
    super();
  }

  submitFulfilledTenderForm() {
    this.submitInProgressSubject$.next(true);
    this.procurementService.setFulfillment({
      tenderId: this.tenderId,
      fulfilled: this.fulfilled,
      ...this.fulfilledTenderForm.value
    })
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.submitInProgressSubject$.next(false);
        this.store.dispatch(closeDialog());
      }, () => this.isSubmitting = false);
  }

  closeDialog() {
    const dialogCloseConfirmed = confirm('Are you sure you wish to close the bid fulfillent form?');
    if(dialogCloseConfirmed) {
      this.store.dispatch(closeDialog());
    }
  }
}
