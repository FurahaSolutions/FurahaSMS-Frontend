import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GuardiansService } from 'src/app/services/guardians.service';
import { map, mergeMap} from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { AppState } from '../../../store/reducers';
import { selectEditModeOnState } from '../../../store/selectors/app.selectors';

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent {
  faPlusCircle = faPlusCircle;
  faEye = faEye;
  faInfoCircle = faInfoCircle;
  studentId$ = ((this.route.parent as ActivatedRoute).parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  guardians$: Observable<any[]> | undefined = this.studentId$.pipe(
    mergeMap(studentId => this.guardianService.getForStudent(Number(studentId)))
  );
  editMode$: Observable<boolean> = this.store.pipe(select(selectEditModeOnState));


  constructor(
    private route: ActivatedRoute,
    private guardianService: GuardiansService,
    private store: Store<AppState>
  ) {
  }

}
