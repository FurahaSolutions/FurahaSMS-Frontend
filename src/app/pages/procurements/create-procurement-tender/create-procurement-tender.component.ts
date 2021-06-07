import {Component} from '@angular/core';
import {ProcurementService} from 'src/app/services/procurement.service';
import {Observable} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {map, mergeMap, takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-procurement-tender',
  templateUrl: './create-procurement-tender.component.html',
  styleUrls: ['./create-procurement-tender.component.css']
})
export class CreateProcurementTenderComponent extends subscribedContainerMixin(formMixin()) {
  faSpinner: any;
  faSave: any;
  procurementItem$: Observable<any> = this.route.paramMap
    .pipe(map(params => Number(params.get('id'))))
    .pipe(mergeMap(id => this.procurementService.getProcurementRequestWithId(id)));
  tenderForm: FormGroup = this.fb.group({
    expiryDatetime: ['', [Validators.required]],
    description: ['', Validators.required]
  });


  constructor(
    private procurementService: ProcurementService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    super();
  }

  submitTenderForm() {
    this.submitInProgressSubject$.next( true);
    this.procurementItem$
      .subscribe(item => {
        this.procurementService.createTender({
          ...this.tenderForm.value,
          ['procurement_request_id']: item.id,
          ['expiry_datetime']: this.tenderForm.value.expiryDatetime
        })
          .pipe(takeUntil(this.destroyed$))
          .subscribe({
            next: () => this.submitInProgressSubject$.next(false),
            error: () => this.submitInProgressSubject$.next(false)
          });
      });

  }

}
