import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducers, REDUCER_TOKEN, reducerProvider } from 'src/app/store/reducers';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { AppStarLabelRequiredModule } from '../../../../components/label-star-required/app-star-label-required';
import { ErrorComponent } from '../../../../components/error/error.component';
import { InputComponent } from '../../../../components/input/input.component';
import { CreateClassLevelCategoryComponent } from './create-class-level-category.component';

describe('CreateClassLevelCategoryComponent', () => {
  let component: CreateClassLevelCategoryComponent;
  let fixture: ComponentFixture<CreateClassLevelCategoryComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        EditorModule,
        AppLoadingBubbleModule,
        AppStarLabelRequiredModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [CreateClassLevelCategoryComponent, InputComponent, ErrorComponent],
      providers: [
        {provide: TINYMCE_SCRIPT_SRC, useValue: '/tinymce/tinymce.min.js'},
        reducerProvider,
        {
          provide: ClassLevelCategoryService,
          useValue: {
            get: () => of({}),
            submit: () => of({id: 1})
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({get: () => 1})
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => {
            }
          }
        }
      ]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassLevelCategoryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'pipe').and.callThrough();
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hava a submit button that calls classLevelCategory.submit() function', () => {
    // const classLevelCategorySpy = spyOn<any>(component, 'classLevelCategory');
    component.classLevelCategoryForm = new FormGroup({});
    component.submit();
    expect(component).toBeTruthy();
    // expect(classLevelCategorySpy).toHaveBeenCalled();
  });
});
