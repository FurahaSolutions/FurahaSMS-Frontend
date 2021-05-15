import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap, take } from 'rxjs/operators';
import { GuardiansService } from '../../../services/guardians.service';
import { loadGuardianProfilesSuccess } from '../store/actions/guardian-profile.actions';
import { GenderService } from '../../../services/gender.service';
import { ReligionService } from '../../../services/religion.service';

@Component({
  selector: 'app-view-guardian-info',
  templateUrl: './view-guardian-info.component.html',
  styleUrls: ['./view-guardian-info.component.css']
})
export class ViewGuardianInfoComponent {
  genders$ = this.genderService.loadAll$;
  religions$ = this.religionService.loadAll$;
  guardianId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  guardianProfile$: Observable<any> = this.guardianId$.pipe(
    mergeMap(id => this.guardianService.loadGuardianProfile$(id))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private guardianService: GuardiansService,
    private genderService: GenderService,
    private religionService: ReligionService
  ) {
  }


  changeProfile(event: { fieldName: string; fieldNewValue: string } | Event) {
    const eventTemp = event as { fieldName: string; fieldNewValue: string };
    if(eventTemp.fieldName) {
      this.guardianId$.pipe(take(1))
        .subscribe({
          next: (id) => this.store.dispatch(loadGuardianProfilesSuccess(
            {data: {id, [eventTemp.fieldName]: eventTemp.fieldNewValue}}))
        });
    }

  }

  updateSelectValue({key, id, name}: { key: string; id: number; name: string }) {
    this.guardianId$.pipe(take(1))
      .subscribe({
        next: (profileId) => this.store.dispatch(loadGuardianProfilesSuccess({
          data: {
            id: profileId,
            [key + '_id']: id,
            [key + 'Name']: name,
          }
        }))
      });

  }
}
