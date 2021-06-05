import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import {reducerProvider} from 'src/app/store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateSemesterComponent } from '../create-semester/create-semester.component';
import { AppCrudModule } from '../../../../../components/crud/app-crud.module';
import {EditSemesterComponent} from './edit-semester.component';

describe('EditSemesterComponent', () => {
  let component: EditSemesterComponent;
  let fixture: ComponentFixture<EditSemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ErrorModule,
        ReactiveFormsModule,
        ReactiveComponentModule,
        HttpClientTestingModule,
        AppCrudModule
      ],
      declarations: [EditSemesterComponent, CreateSemesterComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
