import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ModalModule} from 'ngx-bootstrap/modal';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from 'src/app/store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {ReactiveComponentModule} from '@ngrx/component';
import {TimeTableTimingsComponent} from './time-table-timings.component';

describe('TimeTableTimingsComponent', () => {
  let component: TimeTableTimingsComponent;
  let fixture: ComponentFixture<TimeTableTimingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule,
        AccordionModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [TimeTableTimingsComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
