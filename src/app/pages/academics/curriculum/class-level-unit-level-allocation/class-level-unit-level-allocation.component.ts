import {Component} from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {UnitLevelService} from '../../../../services/unit-level.service';
import {ClassLevelUnitLevelAllocationService} from '../../services/class-level-unit-level-allocation.service';

@Component({
  selector: 'app-class-level-unit-level-allocation',
  templateUrl: './class-level-unit-level-allocation.component.html',
  styleUrls: ['./class-level-unit-level-allocation.component.css']
})
export class ClassLevelUnitLevelAllocationComponent {
  faEdit = faEdit;
  loadData$ = new BehaviorSubject(null);
  unitLevels$ = this.unitLevelsService.getAll();
  classLevelsWithUnits$ = this.loadData$.pipe(
    mergeMap(() => this.classLevelUnitLevelService.getAll())
  );
  v$ = combineLatest([this.unitLevels$, this.classLevelsWithUnits$]).pipe(
    map(([unitLevels, classLevels]) => ({
      unitLevels,
      classLevels: classLevels.map(classLevel =>
        ({ ...classLevel, taughtUnits: classLevel.taughtUnits.map( (i: number) =>
            unitLevels.find(({id}: { id: number }) => id === i))}))
    })),
  );

  constructor(
    private unitLevelsService: UnitLevelService,
    private classLevelUnitLevelService: ClassLevelUnitLevelAllocationService
  ) {
  }

}
