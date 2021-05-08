import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/reducers';
import { LibraryBookTagService } from 'src/app/pages/library/services/library-book-tag.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-tag',
  templateUrl: './view-tag.component.html',
  styleUrls: ['./view-tag.component.css']
})
export class ViewTagComponent {

  tag$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.libraryTagService.getTagWithId(id))
  );

  constructor(
    private libraryTagService: LibraryBookTagService,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
  }

}
