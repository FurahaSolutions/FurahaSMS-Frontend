import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  faTimes = faTimes;
  faExclamationCircle = faExclamationCircle;
  errorBody$ = this.store.select(selectErrorState);

  constructor(private store: Store<fromStore.AppState>) {
  }

  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }

}
