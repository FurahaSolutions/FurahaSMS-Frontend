import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-view-procurements-approved-requests',
  templateUrl: './view-procurements-approved-requests.component.html',
  styleUrls: ['./view-procurements-approved-requests.component.css']
})
export class ViewProcurementsApprovedRequestsComponent {
  procurementItems$ = this.procurementService.getRequestsPendingTendering();
  isOpen = [false];

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
  }
}
