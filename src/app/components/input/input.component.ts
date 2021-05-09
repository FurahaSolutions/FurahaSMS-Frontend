import { Component, OnInit, Input, forwardRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  FormGroup
} from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AppFormService } from 'src/app/services/AppForm.service';
import { tap } from 'rxjs/operators';

export const isControlRequired = (abstractControl: FormControl): boolean => {

  if(abstractControl.validator) {
    const validator = abstractControl.validator(new FormControl(''));
    if(validator && validator.required) {
      return true;
    }
  }
  return false;
};

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
  @Input() label: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() prependIcon: string;
  @Input() triggerValidation: boolean;
  @Input() autofocus: boolean;
  @Input() autocomplete: string;
  @Input() type: string;
  @Input() labelClass: string;
  @Input() inputClass: string;
  @Input() step: number;
  @Input() min: number;
  @Input() showPasswordStrength = false;
  fieldError: string | null;
  fieldType = 'text';
  disabled: boolean;
  onChanges: ($value: any) => void;
  onTouched: () => void;
  inputGroup = new FormGroup({
    value: new FormControl('')
  });
  valueChanges$ = this.formControl.valueChanges.pipe(
    tap(() => {
      console.log('WOOOOOW');
    })
  );
  onValidationChange: () => void;
  inputValue: any;
  passwordStringChangeSubject$: Subject<string> = new BehaviorSubject('');
  passwordStringChangeAction$: Observable<string> = this.passwordStringChangeSubject$.asObservable();
  isRequired = false;

  constructor(private appFormService: AppFormService) {
  }

  ngOnInit() {
    if(['color', 'tel', 'phone', 'password', 'number', 'date', 'datetime-local', 'time'].includes(this.type)) {
      this.fieldType = this.type;
    }
  }

  // get isRequired(): boolean {
  //   if(this.formControl.validator) {
  //     const validationResult = this.formControl.validator(this.formControl);
  //     return (validationResult !== null && validationResult.required === true);
  //   }
  //   return false;
  // }

  get formControl() {
    return this.inputGroup.get('value') as FormControl;
  }

  setDisabledState?(isDisabled: boolean): void {
    if(!this.disabled) {
      if(!isDisabled) {
        this.inputGroup.get('value')?.enable();
        this.inputGroup.get('value')?.updateValueAndValidity();
      } else {
        this.disabled = true;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const triggerValidation: SimpleChange = changes.triggerValidation;
    if(triggerValidation && !triggerValidation.firstChange) {
      this.inputGroup.get('value')?.markAsTouched();
      this.validateField();
    }
  }

  validate(control: FormControl) {
    this.isRequired = isControlRequired(control);
    console.log(control.valid);
    this.formControl.setValidators(control.validator);
    this.formControl.updateValueAndValidity();
    if(this.showPasswordStrength) {
      this.passwordStringChangeSubject$.next(this.inputGroup.get('value')?.value);
    }
  }

  writeValue(value: any): void {
    if(value !== undefined) {
      this.inputGroup.setValue({value});
    }
    // console.log(this.formControl);
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validateField() {
    this.fieldError = this.appFormService.getErrorMessage(this.inputGroup.get('value') as FormControl, this.label);
    this.onTouched();
  }

  updateFieldValidation() {
    if(this.fieldError) {
      this.validateField();
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    console.log(fn);
    this.onValidationChange = fn;
  }
}
