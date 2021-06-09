import { Component } from '@angular/core';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { selectICan } from 'src/app/pages/my-profile/store/selectors/my-profile.selectors';
import { select, Store } from '@ngrx/store';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';

@Component({
  templateUrl: './view-class-level-category.component.html',
  styleUrls: ['./view-class-level-category.component.css']
})
export class ViewClassLevelCategoryComponent {
  faEdit = faEdit;
  faChevronRight = faChevronRight;
  iCanEditClassLevel$ = this.store.pipe(select(selectICan('update class level')));

  classLevelCategory$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.classLevelCategoryService.getCategoryWithId(id))
  );

  constructor(
    private classLevelCategoryService: ClassLevelCategoryService,
    private route: ActivatedRoute,
    private store: Store
  ) {
  }

}
