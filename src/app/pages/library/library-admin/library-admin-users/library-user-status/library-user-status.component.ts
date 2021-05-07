import { Component } from '@angular/core';
import { LibraryUserService } from '../services/library-user.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-library-user-status',
  templateUrl: './library-user-status.component.html',
  styleUrls: ['./library-user-status.component.css']
})
export class LibraryUserStatusComponent {
  userId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id')))
  );

  user$ = this.userId$.pipe(
    switchMap(id => this.libraryUserService.getUserWithId(id))
  );
  constructor(private route: ActivatedRoute, private libraryUserService: LibraryUserService) {
  }


}
