import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateStreamComponent } from '../create-stream/create-stream.component';
import { AppCrudModule } from '../../../../../components/crud/app-crud.module';
import { EditStreamComponent } from './edit-stream.component';


describe('EditStreamComponent', () => {
  let component: EditStreamComponent;
  let fixture: ComponentFixture<EditStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ErrorModule,
        HttpClientTestingModule,
        AppCrudModule,
        ReactiveFormsModule
      ],
      declarations: [EditStreamComponent, CreateStreamComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
