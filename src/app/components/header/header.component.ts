import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { hideMenu, showMenu } from 'src/app/store/actions/menu-toggle.actions';
import { selectShowMenu } from 'src/app/store/selectors/menu-toggle.selector';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  faBars = faBars;
  isMenuClosed$ = this.store.select(selectShowMenu);
  isMenuClosed = true;
  isCollapsed = true;
  isSmallDevice$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(state => state.matches)
    );

  constructor(private store: Store<AppState>,
              public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });
  }

  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(hideMenu());
    } else {
      this.store.dispatch(showMenu());
    }
  }

}
