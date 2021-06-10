import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { ICourse } from '../interfaces/course.interface';
import { ELearningService } from '../services/e-learning.service';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-e-learning-courses',
  templateUrl: './e-learning-courses.component.html',
  styleUrls: ['./e-learning-courses.component.css']
})
export class ELearningCoursesComponent extends subscribedContainerMixin() implements OnDestroy {
  faInfoCircle = faInfoCircle;
  faFolderOpen = faFolderOpen;
  faFolder = faFolder;
  limit = 100;
  courses$: Observable<ICourse[]> = this.eLearningService.getCourses({limit: this.limit})
    .pipe(takeUntil(this.destroyed$));
  filterString = '';
  isCollapsed: boolean[] = [false];
  filterSubject$ = new BehaviorSubject('');
  filterAction$ = this.filterSubject$.asObservable();
  filteredCourses$: Observable<ICourse[]> = combineLatest([
    this.courses$, this.filterAction$]).pipe(
    map(([courses, filterString]) => courses.filter(course => (course.name && course.name.includes(filterString)) ||
      (course.classLevelName && course.classLevelName.includes(filterString)) ||
      (course.academicYearName && course.academicYearName.includes(filterString)) ||
      (course.unitName && course.unitName.includes(filterString))))
  );

  constructor(private eLearningService: ELearningService) {
    super();
  }


  toggleCollapse(i: number) {
    const temp = this.isCollapsed[i];
    this.isCollapsed = [false];

    this.isCollapsed[i] = !temp;
  }

  groupedCourses(xs: any[], key: string | number): any[] {
    const grouped = xs.reduce((acc: any, x: any) => Object.assign({}, acc, {
      [x[key]]: (acc[x[key] as any] || []).concat(x)
    }), {});

    return Object.entries(grouped);
  }
}
