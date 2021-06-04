import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, tap } from 'rxjs/operators';
import { loadExamPapers } from '../../store/actions/exam-paper.actions';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-admin-exam-paper',
  templateUrl: './admin-exam-paper.component.html',
  styleUrls: ['./admin-exam-paper.component.css']
})
export class AdminExamPaperComponent extends subscribedContainerMixin() implements OnInit {

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      tap((id) => this.store.dispatch(loadExamPapers({ id }))),
      takeUntil(this.destroyed$)
    ).subscribe();
  }
}
