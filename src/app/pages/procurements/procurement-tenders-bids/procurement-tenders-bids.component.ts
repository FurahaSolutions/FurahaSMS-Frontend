import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProcurementService } from 'src/app/services/procurement.service';
import * as fromStore from '../../../store/reducers';

@Component({
  selector: 'app-procurement-tenders-bids',
  templateUrl: './procurement-tenders-bids.component.html',
  styleUrls: ['./procurement-tenders-bids.component.css']
})
export class ProcurementTendersBidsComponent {

  procurementItems$ = this.procurementService.getRequestsTendered();

  constructor(private store: Store<fromStore.AppState>, private procurementService: ProcurementService) {
  }

}
