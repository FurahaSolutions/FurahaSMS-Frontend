import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { tap } from 'rxjs/operators';
import { NetworkLoadingService } from '../../services/network-loading.service';

@Component({
  selector: 'app-network-loading',
  templateUrl: './network-loading.component.html',
  styleUrls: ['./network-loading.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkLoadingComponent {
  faSpinner = faSpinner;
  isLoading$ = this.networkLoadingService.isLoadingAction$.pipe(
    tap(() => this.cdRef.detectChanges())
  );
  constructor(private networkLoadingService: NetworkLoadingService, private cdRef: ChangeDetectorRef) { }

}
