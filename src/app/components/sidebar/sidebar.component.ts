import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { LinkService } from 'src/app/services/link.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter, map, tap } from 'rxjs/operators';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { selectShowMenu } from '../../store/selectors/menu-toggle.selector';
import { hideMenu, showMenu } from '../../store/actions/menu-toggle.actions';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHome = faHome;
  faTimes = faTimes;
  isMenuClosed$ = this.store.select(selectShowMenu);
  listItems$ = this.linkService.dashboardLinks;
  isMenuClosed = true;
  isClickedSubject$ = new Subject<boolean>();
  isSmallDevice$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(state => state.matches)
    );



  constructor(
    private store: Store<AppState>,
    private linkService: LinkService,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit() {
    this.isMenuClosed$.subscribe(isMenuClosed => {
      this.isMenuClosed = isMenuClosed;
    });

    combineLatest([
      this.isClickedSubject$,
      this.isSmallDevice$
    ]).pipe(
      filter(([clicked, isSmallDevice]) => clicked && isSmallDevice),
      tap(() => this.store.dispatch(showMenu())),
      tap(() => this.isClickedSubject$.next(false))
    ).subscribe();
  }

  toggleMenu(): void {
    if (this.isMenuClosed) {
      this.store.dispatch(hideMenu());
    } else {
      this.store.dispatch(showMenu());
    }
  }

  goto($event: MouseEvent, _b: any) {
    $event.stopPropagation(); // Only seems to
    $event.preventDefault(); // work with both
  }

  handleLinkClick() {
    this.isClickedSubject$.next(true);
  }

}
