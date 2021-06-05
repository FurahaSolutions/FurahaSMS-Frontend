import { Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons/faCheckSquare";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() readonly = false;
  inputValue: any;
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  constructor() {
  }

  onChanges: (val: any) => void = () => {
  };
  onTouched: (val: any) => void = () => {
  };

  writeValue(value: any): void {
    if(value !== undefined) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn: any): void {

    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  propagateValue(event: boolean) {
    this.onChanges(event);
  }
}
