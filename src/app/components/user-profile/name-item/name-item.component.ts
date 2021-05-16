import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { select, Store } from '@ngrx/store';
import { selectEditModeOnState } from 'src/app/store/selectors/app.selectors';
import { Observable } from 'rxjs';
import { formMixin } from 'src/app/shared/mixins/form.mixin';
import { fadeInOutAnimationMetadata } from "../../../shared/animations/fade-in-out.animation";

type IKey = 'dateOfBirth' | 'firstName' | 'lastName' | 'otherNames' | 'email' | 'phone';

@Component({
  selector: 'app-name-item',
  templateUrl: './name-item.component.html',
  styleUrls: ['./name-item.component.css'],
  animations: [
    fadeInOutAnimationMetadata
  ],
})
export class NameItemComponent extends formMixin() implements OnInit {

  @Input() key: IKey;
  @Input() type: string;
  @Input() name: string;
  @Input() label = '';
  @Input() userId: number;
  @Output() valueChanged = new EventEmitter<{ fieldName: string; fieldNewValue: string }>();
  itemForm: FormGroup;
  editHovered = false;
  editable = false;
  editMode$: Observable<boolean> = this.store.pipe(select(selectEditModeOnState));

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: [this.name, Validators.required]
    });
    if(['firstName', 'lastName'].includes(this.key)) {
      this.itemForm.get('name')?.setValidators([Validators.required, Validators.minLength(2)]);
    } else if(this.key === 'email') {
      this.itemForm.get('name')?.setValidators([Validators.email, Validators.required])
    }
    this.itemForm.updateValueAndValidity();

  }

  submitFormItem() {
    if(this.itemForm.valid) {

      this.submitInProgressSubject$.next(true);
      let fieldNewValue = this.itemForm.get('name')?.value;
      if(this.key === 'dateOfBirth') {
        fieldNewValue = new Date(fieldNewValue).toISOString().substr(0, 10)
      }
      this.usersService.update({
        fieldName: this.key,
        fieldNewValue,
        userId: this.userId
      })
        .subscribe({
          complete: () => this.submitInProgressSubject$.next(false),
          next: () => {
            this.valueChanged.emit({ fieldName: this.key, fieldNewValue });
            this.editable = false;
          },
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      alert('Form not filled correctly');
    }

  }
}
