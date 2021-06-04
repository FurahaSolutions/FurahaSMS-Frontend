import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActivePageStateId } from 'src/app/store/selectors/active-page.selector';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-view-academic-year-info',
  templateUrl: './view-academic-year-info.component.html',
  styleUrls: ['./view-academic-year-info.component.css']
})
export class ViewAcademicYearInfoComponent {
  @Input() params: { id: number } | undefined;
  id$ = this.store.select(selectActivePageStateId);
  constructor(private store: Store<AppState>) { }

}
