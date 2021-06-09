import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { LibraryPublisherService } from '../../services/library-publisher.service';
import { selectLibraryBookPublishers } from '../../store/selectors/library.selectors';
import { removeLibraryBookPublisher } from '../../store/actions/library-book-publisher.actions';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-library-admin-publishers',
  templateUrl: './library-admin-publishers.component.html',
  styleUrls: ['./library-admin-publishers.component.css']
})
export class LibraryAdminPublishersComponent extends subscribedContainerMixin() implements OnInit {
  categories: any;

  constructor(private store: Store<any>, private bookPublisherService: LibraryPublisherService) {
    super();
  }

  ngOnInit() {
    this.bookPublisherService.loadAll$
      .pipe(takeUntil(this.destroyed$))
      .subscribe();
    this.categories = {
      ...this.bookPublisherService,
      getAll: () => this.store.pipe(select(selectLibraryBookPublishers)),
      deleteItem: this.bookPublisherService.deleteItem
    };
  }

  removePublisher(id: number) {
    this.store.dispatch(removeLibraryBookPublisher({data: {id}}));
  }
}
