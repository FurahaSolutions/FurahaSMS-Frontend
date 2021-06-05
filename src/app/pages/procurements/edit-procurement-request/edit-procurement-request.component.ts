import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import * as fromStore from '../../../store/reducers';
import { subscribedContainerMixin } from '../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-edit-procurement-request',
  templateUrl: './edit-procurement-request.component.html',
  styleUrls: ['./edit-procurement-request.component.css']
})
export class EditProcurementRequestComponent extends subscribedContainerMixin() implements OnInit {
  requestId: number | undefined;

  constructor(private store: Store<fromStore.AppState>, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      map(params => Number(params.get('id'))),
      takeUntil(this.destroyed$)
    ).subscribe(id => {
      this.requestId = id;
    });

  }

}
