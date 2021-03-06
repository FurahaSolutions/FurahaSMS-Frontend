import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {AppInputModule} from '../../../../../../components/input/app-input.module';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../../../store/reducers';
import {academicsFeatureKey, reducers} from '../../../../store/reducers';
import {AppValidateSubmitButtonsModule} from '../../../../../../components/validate-submit-buttons/validate-submit-buttons.module';
import {FileExtensionModule} from '../../../../../../shared/file-extention/file-extension.module';
import {AppFilesizeModule} from '../../../../../../shared/filesize/filesize.module';
import {EditCourseContentItemComponent} from './edit-course-content-item.component';

describe('EditCourseContentItemComponent', () => {
  let component: EditCourseContentItemComponent;
  let fixture: ComponentFixture<EditCourseContentItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppInputModule,
        HttpClientTestingModule,
        AppValidateSubmitButtonsModule,
        FormsModule,
        ReactiveFormsModule,
        FileExtensionModule,
        AppFilesizeModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(academicsFeatureKey, reducers),
        ModalModule.forRoot(),
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [EditCourseContentItemComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseContentItemComponent);
    component = fixture.componentInstance;
    component.learningContent = {
      ['study_material']: {title: 'Doc Title', ['study_material_doc']: {name: 'Name', type: 'pdf', size: 100}}
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
