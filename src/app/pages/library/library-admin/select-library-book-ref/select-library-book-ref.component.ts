import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { LibraryBookService } from '../../services/library-book.service';

@Component({
  selector: 'app-select-library-book-ref',
  templateUrl: './select-library-book-ref.component.html',
  styleUrls: ['./select-library-book-ref.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectLibraryBookRefComponent),
      multi: true
    },
  ]
})
export class SelectLibraryBookRefComponent implements ControlValueAccessor {
  @Input() borrowed = false;

  selectedItemSubject$ = new BehaviorSubject<any | null>(null);
  controlValue: number;
  search = '';
  onChanges: any;
  onTouched: any;
  suggestions$ = new Observable((observer: Observer<string>) => {
    observer.next(this.search);
  }).pipe(
    switchMap((query: string) =>
      query && query !== '' ? this.libraryService.filter({title: query}) : of([])
    ),
    map(books => books.reduce((prev, next) =>
        ([...prev, ...next.book_items.map((bookItem: any) => ({id: next.id, name: next.title + ' - ' + bookItem.ref}))]),
      [])),
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
