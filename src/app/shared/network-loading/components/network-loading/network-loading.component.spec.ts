import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ReactiveComponentModule} from '@ngrx/component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TabErrorStateModule } from '../../../../components/tab-error-state/app-tab-error.module';
import {NetworkLoadingComponent} from './network-loading.component';

describe('NetworkLoadingComponent', () => {
  let component: NetworkLoadingComponent;
  let fixture: ComponentFixture<NetworkLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveComponentModule,
        FormsModule,
        FontAwesomeTestingModule,
        TabErrorStateModule
      ],
      declarations: [NetworkLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
