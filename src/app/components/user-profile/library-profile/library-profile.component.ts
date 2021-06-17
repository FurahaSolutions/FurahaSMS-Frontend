import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { selectEditModeOnState } from '../../../store/selectors/app.selectors';
import { AppState } from '../../../store/reducers';
import { LibraryUserService } from '../../../pages/library/library-admin/library-admin-users/services/library-user.service';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-library-profile',
  templateUrl: './library-profile.component.html',
  styleUrls: ['./library-profile.component.css']
})
export class LibraryProfileComponent extends subscribedContainerMixin() {
  userId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  refresh$ = new BehaviorSubject(true);
  editMode$ = this.store.select(selectEditModeOnState);

  user$ = combineLatest([
    this.refresh$,
    this.userId$
  ]).pipe(
    switchMap(([, id]) => this.libraryUserService.getUserWithId(id))
  );

  v$ = combineLatest([this.editMode$, this.user$]).pipe(
    map(([editMode, user]) => ({editMode, user}))
  );


  constructor(private libraryUserService: LibraryUserService, private store: Store<AppState>, private route: ActivatedRoute) {
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
