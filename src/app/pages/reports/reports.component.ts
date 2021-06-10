import { Component } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  faFileAlt = faFileAlt;

  constructor() {
  }

}
