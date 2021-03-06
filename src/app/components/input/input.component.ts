import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { AppFormService } from '../../services/AppForm.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() id = '';
  @Input() prependIcon = '';
  @Input() formControl: FormControl = new FormControl();
  @Input() triggerValidation = false;
  @Input() autofocus = false;
  @Input() autocomplete = '';
  @Input() type = 'text';
  @Input() labelClass = '';
  @Input() inputClass = '';
  @Input() step = 1;
  @Input() min = 0;
  @Input() showPasswordStrength = false;
  fieldError: string | null = null;
  fieldType = 'text';
  disabled = false;
  inputValue: any;
  passwordStringChangeSubject$: Subject<string> = new BehaviorSubject('');
  passwordStringChangeAction$: Observable<string> = this.passwordStringChangeSubject$.asObservable();
  minDate = new Date((new Date()).getFullYear() - 100);
  maxDate = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1));
  dateConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default',
    dateInputFormat: 'YYYY-MM-DD',
    showWeekNumbers: false,
  };
  dateOfBirthPickerConfig: Partial<BsDatepickerConfig> = {
    ...this.dateConfig,
    minDate: this.minDate,
    maxDate: this.maxDate
  };
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faStar = faStar;
  constructor(private appFormService: AppFormService) {
  }

  onChanges: ($value: any) => void = () => {
  };
  onTouched: () => void = () => {
  };


  ngOnInit() {
    if (['tel', 'phone', 'password', 'number', 'date', 'datetime-local'].includes(this.type)) {
      this.fieldType = this.type;
    }
  }

  get isRequired(): boolean {
    if (this.formControl.validator) {
      const validationResult = this.formControl.validator(this.formControl);
      return validationResult?.required === true;
    }
    return false;

  }

  setDisabledState?(isDisabled: boolean): void {
    if (!this.disabled) {
      if (!isDisabled) {
        this.formControl.enable();
        this.formControl.updateValueAndValidity();
      } else {
        this.disabled = true;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const triggerValidation: SimpleChange = changes.triggerValidation;
    if (triggerValidation && !triggerValidation.firstChange) {
      this.formControl.markAsTouched();
      this.validateField();
    }
  }

  validate(control: FormControl): any {
    this.formControl = control;
    if (this.showPasswordStrength) {
      this.passwordStringChangeSubject$.next(this.formControl.value);
    }

    if (this.formControl.value !== '') {
      if (this.type === 'dob' && (new Date(this.formControl.value) < this.minDate || new Date(this.formControl.value) > this.maxDate)) {
        return {date: 'invalid'};
      }
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validateField() {
    this.fieldError = this.appFormService.getErrorMessage(this.formControl, this.label);
    this.onTouched();
  }

  updateFieldValidation() {
    if (this.fieldError) {
      this.validateField();
    }
  }
}
