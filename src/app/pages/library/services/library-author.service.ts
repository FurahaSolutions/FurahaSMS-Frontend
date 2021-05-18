import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryAuthorService {

  all$: Observable<any> = this.http.get('api/library-books/authors');

  constructor(private http: HttpClient) {
  }

  save(data: any): Observable<any> {
    if(data.id === 0) {
      return this.http.post('api/library-books/authors', data);
    } else {
      return this.http.patch(`api/library-books/authors/${data.id}`, data);
    }
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`api/library-books/authors/${id}`);
  }

  getAuthorWithId(id: number) {
    return this.http.get(`api/library-books/authors/${id}`);
  }

  filter(searchString: string) {
    return this.http.get<any[]>(`api/library-books/authors`, {params: {name: searchString}});
  }
}
