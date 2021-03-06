import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import {reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppViewItemsModule} from 'src/app/modules/app-view-items.module';
import {AppDescriptionModule} from 'src/app/modules/app-description.module';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {AppChipsModule} from 'src/app/components/chips/app-chip.module';
import {ViewStreamComponent} from './view-stream.component';

describe('ViewStreamComponent', () => {
  let component: ViewStreamComponent;
  let fixture: ComponentFixture<ViewStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ErrorModule,
        HttpClientTestingModule,
        AppViewItemsModule,
        AppChipsModule,
        AppLoadingBubbleModule,
        AppDescriptionModule
      ],
      declarations: [ViewStreamComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
