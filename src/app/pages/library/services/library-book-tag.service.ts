import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryBookTagService {
  all$: Observable<any> = this.http.get('/api/library-books/tags');

  constructor(private http: HttpClient) {
  }

  save(data: any): Observable<any> {
    if (data.id === 0) {
      return this.http.post('api/library-books/tags', data);
    } else {
      return this.http.patch(`api/library-books/tags/${data.id}`, data);
    }
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/library-books/tags/${id}`);
  }

  getTagWithId(id: number) {
    return this.http.get(`api/library-books/tags/${id}`);
  }
}
