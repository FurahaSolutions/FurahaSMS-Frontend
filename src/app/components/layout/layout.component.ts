import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShowMenu } from '../../store/selectors/menu-toggle.selector';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';
import { routerTransition } from '../../shared/animations/route.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [routerTransition],
})
export class LayoutComponent {
  isMenuOpen$: Observable<boolean> = this.store.select(selectShowMenu);
  routerActivated = false;

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
