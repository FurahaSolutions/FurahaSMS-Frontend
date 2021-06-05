import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';
import { of } from 'rxjs';
import { DbService } from 'src/app/services/db.service';
import { takeUntil } from 'rxjs/operators';
import { LibraryBookClassesService } from '../../services/library-book-classes.service';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-select-library-sub-class',
  templateUrl: './select-library-sub-class.component.html',
  styleUrls: ['./select-library-sub-class.component.css']
})
export class SelectLibrarySubClassComponent extends subscribedContainerMixin() implements OnChanges {
  @Input() id: any;
  @Input() classification: any;
  @Output() categoryChanged = new EventEmitter();
  selectedCategoryId: number | undefined;
  libraryBookClasses$: any;

  constructor(
    private cdf: ChangeDetectorRef,
    private libraryBookClassesService: LibraryBookClassesService, private db: DbService) {
    super();
  }

  ngOnChanges(changes: { id: SimpleChange; classification: SimpleChange }) {
    let currentValue: any;
    if (changes) {
      if (changes.id) {
        currentValue = changes.id.currentValue;
      }
      if (changes.classification) {
        this.cdf.detectChanges();
      }

    }
    if (+currentValue > 0) {
      this.db.get('sub-items-' + currentValue)
        .then((doc: any) => {
          this.libraryBookClasses$ = of(doc.items);
        }).catch(() => {
        this.libraryBookClasses$ = this.libraryBookClassesService
          .getClass({classification: this.classification, libraryClass: currentValue});
        this.libraryBookClasses$
          .pipe(takeUntil(this.destroyed$))
          .subscribe((items: any) => {
            const doc = {
              _id: `sub-items-${currentValue}`,
              items
            };
            if (items.length > 0) {

              this.db.put(doc).then(() => {
              }).catch(() => {
              });
            }
          });
      });
    }
  }

  emitChange() {
    this.categoryChanged.emit(this.selectedCategoryId);
  }

  emitChangePropagate($event: any) {
    this.categoryChanged.emit($event);
  }


}
