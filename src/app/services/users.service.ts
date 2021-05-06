import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserProfile } from '../interfaces/user-profile.interface';
import { map } from 'rxjs/operators';

export interface IUserFilter {
  type?: string;
  name?: string;
  limit?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {
  }

  filter = ({type, name, limit = '20'}: IUserFilter): Observable<IUserProfile[]> =>
    this.http.get<IUserProfile[]>('api/users', {
      params: {
        type: type ? type : '',
        name: name ? name : '',
        limit: limit ? limit : ''
      }
    }).pipe(
      map((data: any) => data.map(this.transform) || []),
    );

  transform = (item: any) => ({
    ...item,
    name: item.first_name + ' ' + item.last_name + ' ' + (item.middle_name ? item.middle_name : ''),
    firstName: item.first_name,
    lastName: item.last_name,
    middleName: item.middle_name,
    otherNames: item.other_names,
    dateOfBirth: item.date_of_birth,
  });
  findIfEmailExists(email: string): Observable<any> {
    const url = `api/users/email?q=${email}`;
    return this.http.get(url);
  }

  update(
    {userId, fieldName, fieldNewValue}: { userId: number; fieldName: string; fieldNewValue: string }
  ): Observable<any> {
    const data: any = {
      [fieldName]: fieldNewValue
    };
    return this.http.patch(`api/users/${userId}`, {
      ['first_name']: data.FirstName,
      ['last_name']: data.LastName,
      ['middle_name']: data.MiddleName,
      ['other_names']: data.OtherNames,
      ['gender_id']: data.gender,
      ['religion_id']: data.religion,
      ['date_of_birth']: data.DateOfBirth,
      email: data.Email,
      phone: data.Phone,
    });
  }

  uploadPhoto({file}: { file: File }): Observable<any> {

    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('profilePicture', file);

    return this.http.post('api/files', myFormData, {headers});
  }

  saveProfilePicture({userId, profilePicId}: { userId: number; profilePicId: number }): Observable<any> {
    const data: any = {['profile_pic_id']: profilePicId};
    return this.http.patch(`api/users/${userId}`, data);
  }

  getProfilePicture({userId}: { userId: number }) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/pdf');
    headers.append('Content-Type', 'application/pdf');
    return this.http.get(`api/files?userId=${userId}&profilePicture=1`, {headers, responseType: 'blob'});
  }

  resetPasswordForUserWithId = ({id, resetPassword}: { id: number; resetPassword: string }) =>
    this.http.post(`api/users/${id}/password-reset`, {['reset_password']: resetPassword});
}
