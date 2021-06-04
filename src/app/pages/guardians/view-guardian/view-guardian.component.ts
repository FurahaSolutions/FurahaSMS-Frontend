import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GuardiansService } from 'src/app/services/guardians.service';

@Component({
  selector: 'app-view-guardian',
  templateUrl: './view-guardian.component.html',
  styleUrls: ['./view-guardian.component.css']
})
export class ViewGuardianComponent {
  guardianId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  guardianProfile$: Observable<any> = this.guardianId$.pipe(
    mergeMap(id => this.guardianService.loadGuardianProfile$(id))
  );

  constructor(
    private guardianService: GuardiansService,
    private route: ActivatedRoute
  ) {
  }

  changeProfile(_$event: any) {
  }
}
