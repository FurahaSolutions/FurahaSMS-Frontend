import { Component} from '@angular/core';
import { GuardiansService } from 'src/app/services/guardians.service';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-guardian-students',
  templateUrl: './view-guardian-students.component.html',
  styleUrls: ['./view-guardian-students.component.css']
})
export class ViewGuardianStudentsComponent {

  students$= (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(guardianId => this.guardianService.getStudents(guardianId)));

  constructor(
    private guardianService: GuardiansService,
    private route: ActivatedRoute
  ) { }
}
