import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  @Input() labelOnly = true;
  @Input() successLabel = '';
  @Input() failureLabel = '';
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() value: boolean | undefined;
  faTimes = faTimes;

  get labelValue() {
    // TODO-me change label for success and failure
    return (this.value) ? 'Active' : 'Inactive';
  }

  removeItem() {
    this.remove.emit(true);
  }

}
