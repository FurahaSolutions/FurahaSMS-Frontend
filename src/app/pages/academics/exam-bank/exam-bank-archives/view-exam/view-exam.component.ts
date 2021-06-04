import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { map, takeUntil, tap } from 'rxjs/operators';
import { loadExamPapers } from '../../store/actions/exam-paper.actions';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent extends subscribedContainerMixin() implements OnInit {

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      tap((id) => this.store.dispatch(loadExamPapers({id}))),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

}
