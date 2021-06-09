import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-view-procurements-approved-requests',
  templateUrl: './view-procurements-approved-requests.component.html',
  styleUrls: ['./view-procurements-approved-requests.component.css']
})
export class ViewProcurementsApprovedRequestsComponent {
  procurementItems$ = this.procurementService.getRequestsPendingTendering();
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  isOpen = [false];

  constructor(private procurementService: ProcurementService) {
  }
}
