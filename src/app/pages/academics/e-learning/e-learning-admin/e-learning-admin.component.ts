import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { ELearningService } from '../services/e-learning.service';
import { ICourse } from '../interfaces/course.interface';

@Component({
  selector: 'app-e-learning-admin',
  templateUrl: './e-learning-admin.component.html',
  styleUrls: ['./e-learning-admin.component.css']
})
export class ELearningAdminComponent {
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;
  faFolderOpen = faFolderOpen;
  faFolder = faFolder;
  search = '';
  isCollapsed: boolean[] = [];
  limit = 100;
  courses$: Observable<ICourse[]> = this.eLearningService.getCourses({limit: this.limit});
  filterStringSubject$ = new BehaviorSubject('');
  filteredCourses$ = combineLatest([this.filterStringSubject$, this.courses$]).pipe(
    map(
      ([filterString, courses]) => courses.filter(course =>
        ((course.name && course.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) ||
          (course.classLevelName && course.classLevelName.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())) ||
          (course.unitName && course.unitName.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())))
      )
    )
  );

  constructor(
    private eLearningService: ELearningService
  ) {
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
