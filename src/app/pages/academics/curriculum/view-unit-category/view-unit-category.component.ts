import { Component } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-unit-category',
  templateUrl: './view-unit-category.component.html',
  styleUrls: ['./view-unit-category.component.css']
})
export class ViewUnitCategoryComponent {
  unitCategory$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.unitCategoryService.getUnitCategoryWithId(id))
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>, private unitCategoryService: UnitCategoryService) {
  }

}
