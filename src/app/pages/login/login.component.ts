import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, takeUntil, tap } from 'rxjs/operators';
import { loadErrorMessagesFailure, loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';
import { combineLatest, Observable, Subject } from 'rxjs';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { formMixin } from '../../shared/mixins/form.mixin';
import { subscribedContainerMixin } from '../../shared/mixins/subscribed-container.mixin';
import { AppState } from '../../store/reducers';
import { loadToastShowsSuccess } from '../../store/actions/toast-show.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends subscribedContainerMixin(formMixin()) {
  faUser = faUser;
  faKey = faKey;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faSpinner = faSpinner;
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  });

  inputSubmittedSubject$ = new Subject();
  inputSubmittedAction$ = this.inputSubmittedSubject$.asObservable();
  inputValid$ = this.loginForm.valueChanges.pipe(
    map(() => this.loginForm.valid),
    tap(() => this.inputSubmittedSubject$.next(false))
  );
  submitButtonActive$: Observable<any> = combineLatest([
    this.inputSubmittedAction$,
    this.inputValid$
  ]).pipe(
    map(([submitted, inputChange]) => !submitted && inputChange),
  );

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {
    super();
  }

  submitLoginForm() {
    this.inputSubmittedSubject$.next(true);
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      combineLatest([
        this.route.queryParams.pipe(map(params => params.returnUrl)),
        this.authService.login(this.loginForm.value)
      ]).pipe(
        takeUntil(this.destroyed$),
      ).subscribe({
        next: this.loginSuccessful,
        error: error => {
          this.store.dispatch(loadErrorMessagesSuccess(error));
          this.isSubmitting = false;
        }
      });
    } else {
      this.loginForm.get('password')?.markAsTouched();
      this.loginForm.get('username')?.markAsTouched();
      this.triggerValidation = !this.triggerValidation;
    }
  }

  loginSuccessful = ([returnUrl]: any[]) => {
    returnUrl = returnUrl || '/dashboard';
    this.router.navigateByUrl(returnUrl).then();
    this.isSubmitting = false;
    this.store.dispatch(loadErrorMessagesFailure());
    this.store.dispatch(loadToastShowsSuccess({
      toastHeader: 'Login Successful!',
      toastBody: 'Successfully authenticated',
      showMessage: true,
      toastTime: 'Just Now'
    }));
  };


}
