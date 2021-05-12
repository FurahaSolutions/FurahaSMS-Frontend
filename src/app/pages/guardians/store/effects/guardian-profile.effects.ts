import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GuardianProfileActions from '../actions/guardian-profile.actions';
import { GuardiansService } from '../../../../services/guardians.service';


@Injectable()
export class GuardianProfileEffects {

  loadGuardianProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(GuardianProfileActions.loadGuardianProfiles),
    concatMap(({data}) => {
        if(data?.id) {
          return this.guardianService.getGuardianWithId(data.id).pipe(
            map(profileData => GuardianProfileActions.loadGuardianProfilesSuccess({data: profileData})),
            catchError(error => of(GuardianProfileActions.loadGuardianProfilesFailure({error}))));
        }
        return EMPTY;
      }
    )
  ));


  constructor(private actions$: Actions, private guardianService: GuardiansService) {
  }

}
