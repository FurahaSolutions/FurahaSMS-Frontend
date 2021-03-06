import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { takeUntil, tap } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../../mixins/subscribed-container.mixin';

interface AllValidationErrors {
  controlName: string;
  errorName: string;
  errorValue: any;
}

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent extends subscribedContainerMixin() implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() validated = false;
  @Input() messages: { [id: string]: string };
  faExclamationCircle =  faExclamationCircle;
  errors: AllValidationErrors[];

  constructor() {
    super();
    this.errors = [];
    this.messages = {};
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroyed$),
      tap(() => {
        const formErrors = this.form?.errors as ValidationErrors;
        this.errors = [];
        if (formErrors) {
          Object.keys(formErrors).forEach((keyError, val) => {
            this.errors.push({
              controlName: 'Form',
              errorName: keyError,
              errorValue: val
            });
          });
        }

        this.calculateErrors(this.form);
      })
    ).subscribe();

    this.calculateErrors(this.form);
  }

  calculateErrors(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.errors = this.errors.concat(this.calculateErrors(control));
        return;
      }

      const controlErrors: ValidationErrors = control?.errors as ValidationErrors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.errors.push({
            controlName: field,
            errorName: keyError,
            errorValue: controlErrors[keyError]
          });
        });
      }
    });

    // This removes duplicates
    this.errors = this.errors.filter((error, index, self) =>
      self.findIndex(t => t.controlName === error.controlName && t.errorName === error.errorName) === index);
    return this.errors;
  }

  getErrorMessage(error: any) {
    let label = this.messages[error.controlName];
    if (!label) {
      label = error.controlName.replace(/([A-Z])/g, ' $1');
      label = label.charAt(0).toUpperCase() + label.slice(1);
    }
    switch (error.errorName) {
      case 'required':
        return 'Kindly fill the ' + label + ' field';
      default:
        return 'unknown error ' + error.errorName;
    }
  }

}
