import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { loadingMixin } from 'src/app/shared/mixins/loading.mixin';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent extends loadingMixin() implements OnInit {
  @Input() title = '';
  @Input() itemService: any;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  faPlusCircle = faPlusCircle;
  faAngleRight = faAngleRight;
  faInfoCircle = faInfoCircle;
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;
  items$: Observable<any[]> = of([]);
  deleting: boolean[] = [false];
  itemLoading = false;

  constructor() {
    super();
  }

  ngOnInit() {
    this.items$ = this.itemService.all$.pipe(
      map(res => !res ? [] : res),
      tap((res: any[]) => {
        if (res.length > 1) {
          this.itemLoading = false;
        }
      }));
  }

  deleteItem({id, name, index}: { id: number; name: string; index: number }): void {
    const deletionConfirmed = confirm(`Are you sure you wish to delete "${name}"`);
    if (deletionConfirmed) {
      this.deleting[index] = true;

      this.itemService.deleteItem(id)
        .subscribe({
          next: () => {
            this.deleted.emit(id);
            this.deleting[index] = false;
          },

          complete: () => {
            this.deleting[index] = false;
          }
        });
    }
  }
}
