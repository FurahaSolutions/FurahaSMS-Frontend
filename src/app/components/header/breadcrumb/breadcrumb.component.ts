import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Params,
  PRIMARY_OUTLET,
  Router
} from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons/faUndoAlt';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons/faWindowMaximize';
import { rotate360Metadata } from '../../../shared/animations/rotate_360.animation';

interface BreadcrumbInterface {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    rotate360Metadata
  ]
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: BreadcrumbInterface[] = [];
  faHome = faHome;
  faUndoAlt = faUndoAlt;
  faSyncAlt = faSyncAlt;
  faWindowMaximize = faWindowMaximize;
  backState = 'default';
  showSpinnerSubject$ = new BehaviorSubject<boolean>(false);
  showSpinnerAction$ = this.showSpinnerSubject$.asObservable();
  navigationEvent$ = this.router.events;
  navigationEventEnd$ = this.navigationEvent$.pipe(
    filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel),
    tap(() => {
      this.showSpinnerSubject$.next(false);
      this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
    })
  );
  navigationEventStart$ = this.navigationEvent$.pipe(
    filter(event => event instanceof NavigationStart),
    tap(() => this.showSpinnerSubject$.next(true)),
  );
  v$ = combineLatest([
      this.navigationEventStart$,
      this.navigationEventEnd$,
    ]
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.breadcrumbs = this.getBreadcrumbs(this.router.routerState.root);
  }

  backClicked = () => {
    this.spinBackButton();
    this.location.back();
  };

  goFullScreen = () =>
    (document.querySelector('#main') as HTMLElement).requestFullscreen().then();

  spinBackButton() {
    this.backState = (this.backState === 'default' ? 'rotated' : 'default');
  }

  private getBreadcrumbs(
    route: ActivatedRoute, url: string = '',
    breadcrumbs: BreadcrumbInterface[] = []): BreadcrumbInterface[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;

      const breadcrumb: BreadcrumbInterface = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      if (breadcrumb.label) {
        breadcrumbs.push(breadcrumb);
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return [];
  }
}
