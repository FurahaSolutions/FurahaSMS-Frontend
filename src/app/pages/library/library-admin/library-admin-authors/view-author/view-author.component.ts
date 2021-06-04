import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryAuthorService } from 'src/app/pages/library/services/library-author.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent {
  author$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.libraryAuthorService.getAuthorWithId(id)));

  constructor(
    private libraryAuthorService: LibraryAuthorService,
    private route: ActivatedRoute
  ) { }
}
