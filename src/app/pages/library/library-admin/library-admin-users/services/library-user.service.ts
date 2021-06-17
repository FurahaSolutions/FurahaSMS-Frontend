import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryUserService {
  url = 'api/library-books/users';

  constructor(private http: HttpClient) {
  }

  save = ({userId}: { userId: string }) =>
    this.http.post(this.url, {['user_id']: userId});

  getUserWithId = (id: number) =>
    this.http.get(`${this.url}/${id}`);

  suspend = ({userId}: { userId: string }) =>
    this.http.post(`${this.url}/${userId}`, {['_method']: 'PATCH', suspended: true});

  unsuspend = ({userId}: { userId: string }) =>
    this.http.post(`${this.url}/${userId}`, {['_method']: 'PATCH', suspended: false});
}
