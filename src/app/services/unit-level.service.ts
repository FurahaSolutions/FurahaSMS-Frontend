import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitLevelService {
  constructor(private http: HttpClient) {
  }

  delete(id: number): Observable<any> {
    const url = `api/curriculum/unit-levels/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => res)
    );
  }

  getFilter(data: { academicYearId: number | null; classLevelId?: number }): Observable<any> {
    const params = {
      ['academic_year_id']: data?.academicYearId ?? '',
      ['class_level_id']: data?.classLevelId ?? ''
    };
    const url = `api/curriculum/unit-levels`;
    return this.http.get<any>(url, {params});
  }

  getAll(data: { unit: number | null } = {unit: null}) {
    const {unit} = data;
    let url = 'api/curriculum/unit-levels?';
    if(unit) {
      url += 'unit=' + unit;
    }
    return this.http.get<any>(url).pipe(
      map(
        res => res.map((item: any) => ({...item})),
        () => {
          // Error Has been captured by interceptor
        }
      )
    );
  }
}
