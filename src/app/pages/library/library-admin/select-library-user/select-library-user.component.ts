import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { IUserProfile } from '../../../../interfaces/user-profile.interface';
import { LibraryBookService } from '../../services/library-book.service';

@Component({
  selector: 'app-select-library-user',
  templateUrl: './select-library-user.component.html',
  styleUrls: ['./select-library-user.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectLibraryUserComponent),
      multi: true
    },
  ]
})
export class SelectLibraryUserComponent implements ControlValueAccessor {

  selectedItemSubject$ = new BehaviorSubject<IUserProfile | null>(null);
  controlValue: number;
  search = '';
  onChanges: any;
  onTouched: any;
  suggestions$ = new Observable((observer: Observer<string>) => {
    observer.next(this.search);
  }).pipe(
    switchMap((query: string) => query && query !== '' ? this.libraryService.getUserByName(query) : of([])),
    map((users: IUserProfile[]) =>
      users.map((user) =>
        ({...user, name: `${user.firstName} ${user.lastName}`})))
  );

  constructor(private libraryService: LibraryBookService) {
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: number): void {
    if(value) {
      this.controlValue = value;
    }
  }

  onSelect(event: TypeaheadMatch) {
    this.selectedItemSubject$.next(event.item);
    this.onChanges(event.item.id);
  }
}
