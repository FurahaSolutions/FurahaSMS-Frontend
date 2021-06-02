import { AfterViewInit, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from 'src/app/store/reducers';
import { LibraryPublisherService } from 'src/app/pages/library/services/library-publisher.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { CanvasService } from 'src/app/services/canvas.service';
import { selectLibraryBookPublisher } from '../../../store/selectors/library.selectors';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-publisher',
  templateUrl: './view-publisher.component.html',
  styleUrls: ['./view-publisher.component.css']
})
export class ViewPublisherComponent extends subscribedContainerMixin() implements AfterViewInit {
  profPicLoading = true;
  profPic: HTMLCanvasElement | undefined;
  profilePicId: number | undefined;
  showPlaceholderImage = true;
  publisher$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.libraryPublisherService.loadItem(id)),
    mergeMap(id => this.store.pipe(select(selectLibraryBookPublisher(id)))),
    tap(publisher => {
      if (publisher) {
        this.profilePicId = publisher.profile_pic_id;
        this.getProfilePic();
      }
    }),
  );
  constructor(
    private libraryPublisherService: LibraryPublisherService,
    private store: Store<fromStore.AppState>,
    private route: ActivatedRoute,
    private canvasService: CanvasService

  ) {
    super();
  }
  ngAfterViewInit() {
    this.placeholderImage();
    this.getProfilePic();

  }
  placeholderImage() {
    const img = document.querySelector('#placeholder');
    const ctx = (document.querySelector('#profPicCanvas') as HTMLCanvasElement);
    if (ctx && img) {
      this.canvasService.fitImageOn(ctx, img);
      this.showPlaceholderImage = false;
    } else {
      this.showPlaceholderImage = true;
    }
  }

  getProfilePic() {
    this.profPicLoading = true;
    this.canvasService.getProfilePicture({ fileId: this.profilePicId as number }).pipe(
      takeWhile(() => Number(this.profilePicId) !== 0),
      takeUntil(this.destroyed$)
    ).subscribe({
        next: res => {
          const imageObj = new Image();
          imageObj.src = URL.createObjectURL(res);
          imageObj.onload = () => {
            this.showPlaceholderImage = false;
            this.canvasService.fitImageOn(document.querySelector('#profPicCanvas') as HTMLCanvasElement, imageObj);
          };

        },
        complete: () => this.profPicLoading = false
      });
  }

}
