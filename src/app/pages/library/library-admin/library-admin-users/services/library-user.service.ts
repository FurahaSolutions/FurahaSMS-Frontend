import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryUserService {

  constructor(private http: HttpClient) { }

  save = ({userId}: { userId: string })  =>
    this.http.post('api/library-books/users', {['user_id']: userId });
}
