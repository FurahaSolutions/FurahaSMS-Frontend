import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-login-token',
  templateUrl: './login-token.component.html',
  styleUrls: ['./login-token.component.css']
})
export class LoginTokenComponent extends subscribedContainerMixin(formMixin()) implements OnInit {

  tokenLoginForm: FormGroup = this.fb.group({
    token: ['', [Validators.required]]
  });
  clipBoardChange$: Observable<any> = timer(500, 500);

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private store: Store
  ) {
    super();
  }

  submitTokenLoginForm() {

    this.submitInProgressSubject$.next(true);
    if (this.tokenLoginForm.valid) {
      this.authService.tokenLogin(this.tokenLoginForm.value).pipe(
        takeUntil(this.destroyed$)
      ).subscribe({
        next: ({token}: { token: string }) => {
          this.submitInProgressSubject$.next(false);
          this.router.navigate(['/login/password-change'], {queryParams: {token}, queryParamsHandling: 'merge'});
          this.store.dispatch(loadToastShowsSuccess({
            toastHeader: 'Login Successful!',
            toastBody: 'Successfully authenticated',
            showMessage: true,
            toastTime: 'Just Now'
          }));
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
    } else {
      this.tokenLoginForm.get('email')?.markAsTouched();
    }
  }

  ngOnInit() {
    const clipboardTextSubject$ = new BehaviorSubject('');
    const clipboardTextAction$ = clipboardTextSubject$.asObservable();
    this.clipBoardChange$.pipe(
      tap(() =>
        navigator
          .clipboard
          .readText()
          .then(success => clipboardTextSubject$.next(success))
          .catch(() => {
          })
      )
    ).subscribe();
    clipboardTextAction$.pipe(
      filter(() => this.tokenLoginForm.get('token')?.value === ''),
      filter(res => this.tokenLoginForm.get('token')?.value !== res),
      filter(res => /^[a-zA-Z0-9]{50}$/.test(res)),
      tap(res => this.tokenLoginForm.get('token')?.setValue(res)),
      tap(() => this.tokenLoginForm.markAsDirty())
    ).subscribe();
  }
}
