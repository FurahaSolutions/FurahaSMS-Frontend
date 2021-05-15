import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { selectEditModeOnState } from 'src/app/store/selectors/app.selectors';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { takeUntil } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from "../../../shared/mixins/form.mixin";
import { fadeInOutAnimationMetadata } from "../../../shared/animations/fade-in-out.animation";

@Component({
  selector: 'app-user-select-item',
  templateUrl: './user-select-item.component.html',
  styleUrls: ['./user-select-item.component.css'],
  animations: [
    fadeInOutAnimationMetadata
  ],
})
export class UserSelectItemComponent extends formMixin() implements OnInit {

  @Input() key: string;
  @Input() label: string;
  @Input() value: number;
  @Input() userId: number;
  @Input() valueName: string;
  @Output() valueChanged: EventEmitter<{ key: string, id: number; name: string }> = new EventEmitter();
  @Input() items: Observable<any[]>;
  @ViewChild('selectInput') selectInput: ElementRef;
  editMode$: Observable<boolean> | undefined = this.store.pipe(select(selectEditModeOnState));
  editable = false;
  editHovered = false;
  itemForm: FormGroup = this.fb.group({
    fieldName: ['', Validators.required]
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    super();
  }

  ngOnInit() {
    this.itemForm.get('fieldName')?.setValue(this.value);
  }

  submitFormItem() {

    if(this.itemForm.valid) {
      this.submitInProgressSubject$.next(true);
      const fieldNewValue = this.itemForm.get('fieldName')?.value;
      this.usersService.update({
        fieldName: this.label,
        fieldNewValue,
        userId: this.userId
      })

        .subscribe({
          complete: () => this.submitInProgressSubject$.next(false),
          next: () => {
            this.valueChanged.emit({
              key: this.key,
              id: (this.selectInput.nativeElement as HTMLSelectElement).selectedIndex,
              name: (this.selectInput.nativeElement as HTMLSelectElement).selectedOptions[0].innerText.trim()
            });
            this.editable = false;
          },
          error: () => this.submitInProgressSubject$.next(false)
        })
    } else {
      alert('Form not filled correctly');
    }
  }

}
