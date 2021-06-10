import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-tab-error-state',
  templateUrl: './tab-error-state.component.html',
  styleUrls: ['./tab-error-state.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabErrorStateComponent {
  @Input() hasError = false;
  @Input() marked = false;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;

  constructor() {
  }


}
