import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectErrorState } from 'src/app/store/selectors/error-message.selector';
import { loadErrorMessagesFailure } from 'src/app/store/actions/error-message.actions';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import * as fromStore from '../../store/reducers';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrls: ['./network-error.component.css']
})
export class NetworkErrorComponent {
  faTimes = faTimes;
  errorMessage$ = this.store.select(selectErrorState);

  constructor(private store: Store<fromStore.AppState>) {
  }

  closeMessage() {
    this.store.dispatch(loadErrorMessagesFailure());
  }
}
