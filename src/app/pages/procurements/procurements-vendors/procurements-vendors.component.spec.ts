import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProcurementService} from 'src/app/services/procurement.service';
import {of} from 'rxjs';
import {ReactiveComponentModule} from '@ngrx/component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import {LoadingBubbleComponent} from '../../../components/loading-bubble/loading-bubble.component';
import {ChipsComponent} from '../../../components/chips/chips.component';
import {ErrorComponent} from '../../../components/error/error.component';
import {ViewItemsComponent} from '../../../components/view-items/view-items.component';
import {ProcurementsVendorsComponent} from './procurements-vendors.component';

describe('ProcurementsVendorsComponent', () => {
  let component: ProcurementsVendorsComponent;
  let fixture: ComponentFixture<ProcurementsVendorsComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        ReactiveComponentModule,
        FontAwesomeTestingModule
      ],
      declarations: [
        ProcurementsVendorsComponent,
        ViewItemsComponent,
        ErrorComponent,
        ChipsComponent,
        LoadingBubbleComponent
      ],
      providers: [
        reducerProvider,
        {
          provide: ProcurementService,
          useValue: {
            getVendors: () => of([]),
            deleteVendor: of([])
          }
        }
      ]
    });

     TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementsVendorsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
