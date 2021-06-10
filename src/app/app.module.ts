import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveComponentModule } from '@ngrx/component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { APIInterceptor } from './interceptors/api.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from './store/reducers';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { PagesModule } from './pages/pages.module';
import * as fromApp from './store/reducers/app.reducer';
import { GenderEffects } from './store/effects/gender.effects';
import { ReligionEffects } from './store/effects/religion.effects';
import { ResMessageInterceptor } from './interceptors/res-message.interceptor';
import { NetworkLoadingInterceptor, NetworkLoadingModule } from './shared/network-loading';
import { ErrorModule } from './components/error/error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.APP_REDUCER_TOKEN, {
      metaReducers: fromApp.appMetaReducers
    }),
    EffectsModule.forFeature([GenderEffects, ReligionEffects]),
    NetworkLoadingModule,
    ErrorModule,
    ReactiveComponentModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: NetworkLoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResMessageInterceptor, multi: true},
    reducerProvider,
    fromApp.appReducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
