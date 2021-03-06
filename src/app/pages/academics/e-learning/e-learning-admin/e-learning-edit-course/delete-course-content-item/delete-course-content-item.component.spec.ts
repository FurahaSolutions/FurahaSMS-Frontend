import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { academicsFeatureKey, reducers } from '../../../../store/reducers';
import { metaReducers, REDUCER_TOKEN, reducerProvider } from '../../../../../../store/reducers';
import { DeleteCourseContentItemComponent } from './delete-course-content-item.component';

describe('DeleteCourseContentItemComponent', () => {
  let component: DeleteCourseContentItemComponent;
  let fixture: ComponentFixture<DeleteCourseContentItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        ModalModule.forRoot(),
        FormsModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [DeleteCourseContentItemComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseContentItemComponent);
    component = fixture.componentInstance;
    component.learningContent = {
      ['study_material']: {}
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
