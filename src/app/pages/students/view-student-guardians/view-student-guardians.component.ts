import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GuardiansService } from 'src/app/services/guardians.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { selectEditModeOnState } from "../../../store/selectors/app.selectors";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/reducers";

@Component({
  selector: 'app-view-student-guardians',
  templateUrl: './view-student-guardians.component.html',
  styleUrls: ['./view-student-guardians.component.css']
})
export class ViewStudentGuardiansComponent {
  studentId$ = ((this.route.parent as ActivatedRoute).parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id')))
  )
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
