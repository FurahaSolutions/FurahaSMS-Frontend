import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';
import { formWithEditorMixin } from 'src/app/shared/mixins/form-with-editor.mixin';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { IType } from '../select/select.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent extends formWithEditorMixin() implements OnInit {
  @Input() title: string | undefined;
  @Input() fields: { label: string; name: string; type: string; validators: ValidatorFn[] }[] = [];
  @Input() parent: IType | undefined;
  @Input() itemService: any;
  @Input() transforms: TransformInterface[] | undefined;
  @Input() idIndex: number | undefined;

  // controls: { name: string; validators: any[] }[] = [
  //   {name: 'name', validators: [Validators.required]},
  //   {name: 'abbreviation', validators: [Validators.required]},
  //   {name: 'active', validators: []},
  //   {name: 'description', validators: []}
  //
  // ];
  itemForm: FormGroup = this.fb.group({});
  itemId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    filter(id => id > 0),
    tap(() => this.editFormSubject$.next(true)),
  );
  item$ = this.itemId$.pipe(
    mergeMap(id => this.itemService.getItemById(id)),
    tap((res: any) => {
      this.itemForm.setControl('id', this.fb.control(res.id));
      this.fields.forEach(field => {
        this.itemForm.get(field.name)?.setValue(res?.[field.name]);
      });

      // this.controls.forEach(item => {
      //   if(this.fields.includes(item.name)) {
      //     this.itemForm.get(item.name)?.setValue(res?.[item.name]);
      //   }
      // });
      if (this.transforms) {
        this.transforms.forEach(item => {
          this.itemForm.get(item.from)?.setValue(res?.[item.to]);
        });
      }
    })
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.fields.forEach(item => {
      this.itemForm.setControl(item.name, this.fb.control('', item.validators));
    });
    if (this.parent) {
      this.itemForm.setControl('parentCategory', this.fb.control(null, [Validators.required]));
    }

    this.item$.subscribe();
  }

  get submitData() {
    const toSubmit = this.itemForm.value;
    if (this.transforms) {
      this.transforms.forEach(item => {
        toSubmit[item.to] = toSubmit[item.from];
      });
    }
    return toSubmit;
  }

  submitForm() {

    if (this.itemForm.valid) {
      this.submitInProgressSubject$.next(true);
      this.itemService
        .submit(this.submitData)
        .subscribe({
          next: (res: any) => this.router.navigate(['../', res.id, 'view']),
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.itemForm.markAllAsTouched();
      this.triggerValidationSubject$.next(true);
    }
  }
}
