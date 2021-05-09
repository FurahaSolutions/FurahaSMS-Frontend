import { Component, forwardRef, Input, OnInit } from '@angular/core';

import { noop, Observable, Observer, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IUserProfile } from 'src/app/interfaces/user-profile.interface';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { UsersService } from '../../services/users.service';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserSearchComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserSearchComponent),
      multi: true
    }
  ]
})
export class UserSearchComponent implements OnInit, ControlValueAccessor {
  @Input() type = '';
  search: string;
  selectedUserId = 0;
  suggestions$: Observable<IUserProfile[]> = of([]);
  errorMessage: string;
  selectedItemSubject$ = new Subject<IUserProfile>();
  selectedItemAction$ = this.selectedItemSubject$.asObservable();
  onChanges: ($value: any) => void;
  onTouched: () => void;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {

        if(query) {

          return this.userService.filter({name: query})
            .pipe(
              tap(() => noop, err => {
                this.errorMessage = err && err.message || 'Something goes wrong';
              })
            );
        }

        return of([]);
      })
    );
  }

  onSelect(event: TypeaheadMatch) {
    this.onChanges(event.item.id);
    this.selectedItemSubject$.next(event.item);
  }

  validate(control: FormControl) {
    return control.value !== '';
  }

  writeValue(value: any): void {
    if(value !== undefined) {
      this.selectedUserId = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}