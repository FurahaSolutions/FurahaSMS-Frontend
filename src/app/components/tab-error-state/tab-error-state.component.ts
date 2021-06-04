import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-error-state',
  templateUrl: './tab-error-state.component.html',
  styleUrls: ['./tab-error-state.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabErrorStateComponent {
  @Input() hasError = false;
  @Input() marked = false;

  constructor() {
  }


}
