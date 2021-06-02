import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamPaperService {
  url = 'api/exam-papers';
  constructor(
    private http: HttpClient
  ) { }
  getRecentExamPapers(): Observable<any> {
    return this.http.get(`${this.url}?latest=20`);
  }
  getExamPaperWithId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  save({ unitLevel, ...rest}: any): Observable<any> {
    return this.http.post(`${this.url}`, {['unit_level_id']: unitLevel, ...rest});
  }
  getByFilter(params: any): Observable<any> {
    return this.http.get<any[]>(this.url, {params})
      .pipe(map(res => res.map(item => ({ ...item, unitLevelName: item.unit_level_name }))));
  }
}
