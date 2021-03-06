import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NetworkLoadingService } from '../services/network-loading.service';

@Injectable()
export class NetworkLoadingInterceptor implements HttpInterceptor {

  constructor(
    private networkLoadingService: NetworkLoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.networkLoadingService.show();
    return next.handle(request).pipe(
      finalize(() => this.networkLoadingService.hide())
    );
  }
}
