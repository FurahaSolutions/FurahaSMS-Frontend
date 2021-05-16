import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { selectGender, selectGenders } from '../store/selectors/app.selectors';
import { loadGenders } from '../store/actions/gender.actions';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  url = 'api/genders';

  loadAll$: Observable<any[]> = this.store.pipe(select(selectGenders))
    .pipe(tap(gender => !(gender[0] && gender[0].id) ? this.store.dispatch(loadGenders()) : ''));

  all$: Observable<any> = this.http.get<any>(`${this.url}`);

  constructor(private http: HttpClient, private store: Store) {
  }

  getGender = (id: number | string) => this.store.pipe(select(selectGender(id)));

}
