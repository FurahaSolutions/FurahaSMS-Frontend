import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromToastSelector from './../../store/selectors/toast.selector';
import { select, Store } from '@ngrx/store';
import { loadToastShowsFailure } from '../../store/actions/toast-show.actions';
import { AppState } from '../../store/reducers';
import { takeUntil } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent extends subscribedContainerMixin() implements OnInit, OnDestroy {
  showToast$ = this.store.pipe(select(fromToastSelector.selectShowToastMessage));
  toastHeader$ = this.store.pipe(select(fromToastSelector.selectToastHeader));
  toastBody$ = this.store.pipe(select(fromToastSelector.selectToastBody));
  toastTime$ = this.store.pipe(select(fromToastSelector.selectToastTime));

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit() {
    this.showToast$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(showToast => {
        if (showToast) {
          setTimeout(() => {
            this.hideToast();
          }, 4000);
        }
      });
  }

  hideToast() {
    this.store.dispatch(loadToastShowsFailure());
  }
}
