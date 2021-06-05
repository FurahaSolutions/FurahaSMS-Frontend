import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {DeleteAcademicYearComponent} from './delete-academic-year.component';

describe('DeleteAcademicYearComponent', () => {
  let component: DeleteAcademicYearComponent;
  let fixture: ComponentFixture<DeleteAcademicYearComponent>;

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
        ModalModule.forRoot(),
        HttpClientTestingModule,
        ReactiveComponentModule,
        FormsModule
      ],
      declarations: [ DeleteAcademicYearComponent ],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
