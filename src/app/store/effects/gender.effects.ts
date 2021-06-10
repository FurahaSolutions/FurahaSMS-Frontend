import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { GenderService } from 'src/app/services/gender.service';
import { of } from 'rxjs';
import { loadGenders, loadGendersSuccess, loadGendersFailure } from '../actions/gender.actions';



@Injectable()
export class GenderEffects {

  loadGenders$ = createEffect(() => this.actions$.pipe(
      ofType(loadGenders),
      concatMap(() =>
        this.genderService.all$.pipe(
          map(data => loadGendersSuccess({ data })),
          catchError((error) => of(loadGendersFailure({error}))))
      )
    ));


  constructor(private actions$: Actions, private genderService: GenderService) {}

}
