import { Component } from '@angular/core';
import { UnitsService } from 'src/app/services/units.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent {
  faChevronRight = faChevronRight;
  unit$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.unitService.getUnitWithId(id))
  );

  constructor(private route: ActivatedRoute, private unitService: UnitsService) {
  }

}
