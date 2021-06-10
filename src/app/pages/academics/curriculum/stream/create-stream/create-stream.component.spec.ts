import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import {reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AppCrudModule} from '../../../../../components/crud/app-crud.module';
import {CreateStreamComponent} from './create-stream.component';

describe('CreateStreamComponent', () => {
  let component: CreateStreamComponent;
  let fixture: ComponentFixture<CreateStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ErrorModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppCrudModule
      ],
      declarations: [CreateStreamComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
