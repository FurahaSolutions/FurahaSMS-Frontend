import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ErrorModule} from 'src/app/components/error/error.module';
import {RouterTestingModule} from '@angular/router/testing';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {UserRolesPermissionsComponent} from './user-roles-permissions.component';

describe('UserRolesPermissionsComponent', () => {
  let component: UserRolesPermissionsComponent;
  let fixture: ComponentFixture<UserRolesPermissionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ErrorModule,
        RouterTestingModule.withRoutes([]),
        FormErrorsModule
      ],
      declarations: [UserRolesPermissionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
