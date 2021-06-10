import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';
import { loadActivePagesSuccess } from 'src/app/store/actions/active-page.actions';
import { AppState } from 'src/app/store/reducers';
import { map, mergeMap, tap } from 'rxjs/operators';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-academic-year',
  templateUrl: './view-academic-year.component.html',
  styleUrls: ['./view-academic-year.component.css']
})
export class ViewAcademicYearComponent extends subscribedContainerMixin() {
  faChevronRight = faChevronRight;
  academicYearId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))));
  academicYear$: Observable<any> = this.academicYearId$.pipe(
    tap(id => {
      this.store.dispatch(loadActivePagesSuccess({
        id
      }));
    }),
    mergeMap(id => this.academicYearService.get({id, classLevels: 1})));

  constructor(
    private academicYearService: AcademicYearService,
    private route: ActivatedRoute,
    private store: Store<AppState>) {
    super();
  }

  // ngOnInit() {

  // const activatedRoute: ActivatedRoute = this.router.routerState.root.firstChild.firstChild.firstChild;
  // if (activatedRoute.firstChild.children.length === 0) {
  //   this.academicYearId$ = activatedRoute.params;
  // } else {
  //   this.academicYearId$ = activatedRoute.firstChild.params;
  // }
  // this.academicYearId$
  //   .pipe(takeWhile(() => this.componentIsActive))
  //   .subscribe(item => {
  //   if (item.id) {
  //     this.academicYear$ = this.academicYearService.get({ id: item.id, classLevels: 1 });
  //     this.store.dispatch(loadActivePagesSuccess({
  //       id: item.id
  //     }));
  //   }

  // });
  // }

}
