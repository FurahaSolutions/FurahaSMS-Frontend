import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-validate-submit-buttons',
  templateUrl: './validate-submit-buttons.component.html',
  styleUrls: ['./validate-submit-buttons.component.css'],
})
export class ValidateSubmitButtonsComponent {
  @Input() formItem: FormGroup = new FormGroup({});
  @Input() isSubmitting = false;
  @Output() validationButtonClicked = new EventEmitter();
  faSpinner = faSpinner;
  faSave = faSave;
  validatedSubject$ = new BehaviorSubject<boolean>(false);
  validatedAction$ = this.validatedSubject$.asObservable();

  constructor() {
  }

  triggerValidation() {
    this.validatedSubject$.next(true);
    this.validationButtonClicked.emit();
  }

}
