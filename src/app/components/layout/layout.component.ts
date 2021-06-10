import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons/faCompressArrowsAlt';
import { selectShowMenu } from '../../store/selectors/menu-toggle.selector';
import { AppState } from '../../store/reducers';
import { routerTransition } from '../../shared/animations/route.animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [routerTransition],
})
export class LayoutComponent {
  faCompressArrowsAlt = faCompressArrowsAlt;
  isMenuOpen$: Observable<boolean> = this.store.select(selectShowMenu);

  constructor(private store: Store<AppState>) {
  }

  closeFullScreenMode = (): void => {
    document.exitFullscreen().then();
  };

  getState(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet?.component;
    }
    return null;
  }

}
