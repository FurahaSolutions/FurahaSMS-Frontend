import { Component } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';

@Component({
  selector: 'app-page-under-maintenance',
  templateUrl: './page-under-maintenance.component.html',
  styleUrls: ['./page-under-maintenance.component.css']
})
export class PageUnderMaintenanceComponent {
  faWrench = faWrench;
  faCog = faCog;
  constructor() {
  }

}
