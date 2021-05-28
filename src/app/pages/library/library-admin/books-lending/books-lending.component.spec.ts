import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BooksLendingComponent } from './books-lending.component';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { metaReducers, REDUCER_TOKEN, reducerProvider } from "../../../../store/reducers";
import { AppLinksModule } from "../../../../shared/links/links.module";

describe('BooksLendingComponent', () => {
  let component: BooksLendingComponent;
  let fixture: ComponentFixture<BooksLendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AppLinksModule,
      ],
      declarations: [BooksLendingComponent],
      providers: [
        reducerProvider
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksLendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
