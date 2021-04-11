import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface IArchivableItem {
  name: string;
  permissionName: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class AcademicYearService {
  url = 'api/academic-years';
  all$ = this.http.get<any>(this.url);
  active$ = this.http.get<any>(this.url, {params: {archived: '0'}});
  archived$ = this.http.get<any>(this.url, {params: {archived: '1'}});
  archivableItems$ = this.http.get<IArchivableItem[]>(this.url + '/archivable-items');

  constructor(private http: HttpClient) {
  }

  urlWithId = (id: number) => `${this.url}/${id}`;

  saveUnitLevels(academicYearId: number, data: any): Observable<any> {
    const url = `api/academic-years/${academicYearId}/unit-levels`;
    return this.http.post(url, data);
  }

  get(data: { id: number; classLevels?: 1 }) {

    const {id, classLevels} = data;
    let url = `api/academic-years/${id}?`;
    if (classLevels === 1) {
      url += 'class_levels=1';
    }

    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }

  getAcademicYearWithId({id}: { id: number }): Observable<any> {
    return this.get({id});
  }

  save(data: any) {
    let url = `api/academic-years`;
    if (data.id) {
      url += '/' + data.id;
      return this.http
        .patch<any>(url, {
          ...data,
          ['start_date']: data.startDate,
          ['end_date']: data.endDate
        })
        .pipe(
          map(res => res)
        );
    } else {
      return this.http
        .post<any>(url, {
          ...data,
          ['start_date']: data.startDate,
          ['end_date']: data.endDate
        })
        .pipe(
          map(res => res)
        );
    }
  }

  delete(id: number): Observable<any> {
    const url = `api/academic-years/${id}`;
    return this.http.delete<any>(url).pipe(
      map(res => res)
    );
  }

  getSemestersForAcademicYearWithId(id: number) {
    return this.http.get<any[]>(`${this.urlWithId(id)}/semesters`);
  }

  archivableItemsForAcademicYearWithId(id: number) {
    return this.http.get<any[]>(`${this.urlWithId(id)}/archivable-items`);
  }

  saveClosedStatus({id, openClose, slug}: { id: number; openClose: 'close' | 'open'; slug: string }) {
    return this.http.post<any>(`${this.urlWithId(id)}/${openClose}/${slug}`, {});
  }

  saveArchiveStatus({ id }: {id: number}) {
    return this.http.post<any>(`${this.urlWithId(id)}/archive`, {});
  }

  saveDeletedStatus({ id }: {id: number}) {
    return this.http.delete<any>(`${this.urlWithId(id)}`);
  }
}
