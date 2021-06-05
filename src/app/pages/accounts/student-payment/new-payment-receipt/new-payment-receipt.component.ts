import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { PaymentTypeService } from '../../services/payment-type.service';
import { selectPaymentMethods } from '../../store/selectors/payment-type.selectors';
import { StudentFeePaymentService } from '../../services/student-fee-payment.service';
import { loadNewPaymentReceiptSuccess } from '../../store/actions/student-fee-statement.actions';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../shared/mixins/form.mixin';


@Component({
  selector: 'app-new-payment-receipt',
  templateUrl: './new-payment-receipt.component.html',
  styleUrls: ['./new-payment-receipt.component.css']
})
export class NewPaymentReceiptComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  newPaymentForm = this.fb.group({
    paymentAmount: ['', [Validators.required]],
    paymentType: ['', [Validators.required]],
    paymentRef: [''],
    paymentDate: ['', Validators.required],
  });
  paymentMethods$ = this.store.pipe(
    select(selectPaymentMethods)
  );
  studentId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private paymentTypeService: PaymentTypeService,
    private studentFeePaymentService: StudentFeePaymentService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.paymentTypeService.loadAll$
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  resetForm() {
    this.newPaymentForm = this.fb.group({
      paymentAmount: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      paymentRef: [''],
      paymentDate: ['', Validators.required],
    });
  }

  validateForm() {

  }

  submitPayment() {
    this.submitInProgressSubject$.next(true);
    this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      tap(id => this.studentId = id),
      mergeMap((id) => this.studentFeePaymentService.save({studentId: id, data: this.newPaymentForm.value})),
      takeUntil(this.destroyed$)
    )
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.resetForm();
          this.store.dispatch(loadNewPaymentReceiptSuccess({
            data: {studentId: this.studentId as number, newPayment: res.data}
          }));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

}
