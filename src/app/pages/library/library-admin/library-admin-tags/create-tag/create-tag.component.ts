import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store/reducers';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { filter, map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent extends subscribedContainerMixin(formMixin()) implements OnInit, OnDestroy {

  isLoading = false;

  newBookTagForm = this.fb.group({
    id: [0, []],
    name: ['', [Validators.required]],
  });
  editPage = false;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private libraryTagService: LibraryBookTagService,
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(() => {
        this.editPage = true;
        this.isLoading = true;
      }),
      map(params => Number(params.get('id'))),
      filter(id => id > 0),
      mergeMap(id => this.libraryTagService.getTagWithId(id)),
      takeUntil(this.destroyed$)
    ).subscribe(tag => {
      const tagConverted = tag as { name: string; id: string; biography: string };
      (this.newBookTagForm.get('id') as FormControl).setValue(tagConverted.id);
      (this.newBookTagForm.get('name') as FormControl).setValue(tagConverted.name);
      this.isLoading = false;
    });
    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   if (id > 0) {
    //     this.editPage = true;
    //     this.isLoading = true;
    //     const sub = this.libraryTagService.getTagWithId(id).subscribe(tag => {
    //       const tagConverted = tag as { name: string, id: string, biography: string; };
    //       this.newBookTagForm.get('id').setValue(tagConverted.id);
    //       this.newBookTagForm.get('name').setValue(tagConverted.name);
    //       this.isLoading = false;
    //       sub.unsubscribe();
    //     });
    //   }
    // });
  }

  submitNewBookTagForm() {
    this.isSubmitting = true;
    this.libraryTagService.save(this.newBookTagForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        this.submitInProgressSubject$.next(false);
        this.router.navigate(['library', 'admin', 'tags', res.data.id, 'view']);
      }, () => {
        this.submitInProgressSubject$.next(false);
      });
  }

  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
