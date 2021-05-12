import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap } from 'rxjs/operators';
import { GuardiansService } from '../../../services/guardians.service';

@Component({
  selector: 'app-view-guardian-info',
  templateUrl: './view-guardian-info.component.html',
  styleUrls: ['./view-guardian-info.component.css']
})
export class ViewGuardianInfoComponent {
  guardianId$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  guardianProfile$: Observable<any> = this.guardianId$.pipe(
    mergeMap(id => this.guardianService.loadGuardianProfile$(id))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private guardianService: GuardiansService
  ) {
  }


}
