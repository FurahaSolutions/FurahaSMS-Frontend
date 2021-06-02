import { Component } from '@angular/core';
import { UnitsService } from 'src/app/services/units.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent {
  unit$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.unitService.getUnitWithId(id))
  );

  constructor(private route: ActivatedRoute, private unitService: UnitsService) {
  }

}
