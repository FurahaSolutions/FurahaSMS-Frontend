import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {LibraryUserService} from '../services/library-user.service';
import {subscribedContainerMixin} from '../../../../../shared/mixins/subscribed-container.mixin';
import {loadingMixin} from '../../../../../shared/mixins/loading.mixin';

@Component({
  selector: 'app-library-user-status',
  templateUrl: './library-user-status.component.html',
  styleUrls: ['./library-user-status.component.css']
})
export class LibraryUserStatusComponent extends subscribedContainerMixin(loadingMixin()) {
  userId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  refresh$ = new BehaviorSubject(true);

  user$ = combineLatest([
    this.refresh$,
    this.userId$
  ]).pipe(
    switchMap(([, id]) => this.libraryUserService.getUserWithId(id))
  );

  constructor(private route: ActivatedRoute, private libraryUserService: LibraryUserService) {
    super();
  }

  suspend() {
    this.userId$.pipe(
      switchMap(userId => this.libraryUserService.suspend({userId: String(userId)})),
      tap(() => this.refresh$.next(true)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  unsuspend() {
    this.userId$.pipe(
      switchMap(userId => this.libraryUserService.unsuspend({userId: String(userId)})),
      tap(() => this.refresh$.next(true)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  register() {
    this.userId$.pipe(
      switchMap(userId => this.libraryUserService.save({userId: String(userId)})),
      tap(() => this.refresh$.next(true)),
      takeUntil(this.destroyed$)
    ).subscribe();
  }
}
