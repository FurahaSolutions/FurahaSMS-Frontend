import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';
import { subscribedContainerMixin } from '../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-skip-link',
  styleUrls: ['./skip-link.component.css'],
  template: `<a [href]="skipLinkPath" class="skip-main">Skip to main content</a>
  `
})
export class SkipLinkComponent extends subscribedContainerMixin() implements OnInit {
  skipLinkPath = `${this.router.url.replace('#main', '')}#main`;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      takeUntil(this.destroyed$),
      map(event => (event as any).url)
    ).subscribe(url => {
      if(!/(.)#main$/.test(url)) {
        this.skipLinkPath = `${url}#main`;
      }

    });
  }
}
