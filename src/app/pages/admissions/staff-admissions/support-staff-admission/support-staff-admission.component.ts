import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../../store/reducers';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { selectStaffTypes } from '../../store/selectors/staff-type.selectors';
import { FormBuilder, Validators } from '@angular/forms';
import { SupportStaffService } from 'src/app/pages/support-staffs/services/support-staff.service';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-support-staff-admission',
  templateUrl: './support-staff-admission.component.html',
  styleUrls: ['./support-staff-admission.component.css']
})
export class SupportStaffAdmissionComponent extends subscribedContainerMixin() implements OnInit {
  staffTypes$ = this.store.pipe(
    select(selectStaffTypes)
  );
  staffType: any;
  staffTypeFrom = this.fb.group({
    staffTypeId: ['', [Validators.required]]
  });

  constructor(
    private store: Store<fromStore.AppState>,
    private supportStaffService: SupportStaffService,
    private router: Router,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.supportStaffService.loadAllStaffTypes$
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
  }

  staffTypeFormSubmit() {
    if(this.staffTypeFrom.valid) {
      this.router.navigate(['admissions', 'staff', 'support', this.staffTypeFrom.get('staffTypeId')?.value, 'create']);
    }

  }
}
