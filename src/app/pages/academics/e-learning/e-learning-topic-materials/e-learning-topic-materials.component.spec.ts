import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {academicsFeatureKey, reducers} from '../../store/reducers';
import {ELearningTopicMaterialsComponent} from './e-learning-topic-materials.component';

describe('ELearningTopicMaterialsComponent', () => {
  let component: ELearningTopicMaterialsComponent;
  let fixture: ComponentFixture<ELearningTopicMaterialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        ModalModule.forRoot(),
        RouterTestingModule,
        FontAwesomeTestingModule
      ],
      declarations: [ELearningTopicMaterialsComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningTopicMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
