import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditStreamComponent } from './edit-stream.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';

describe('EditStreamComponent', () => {
  let component: EditStreamComponent;
  let fixture: ComponentFixture<EditStreamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule],
      declarations: [EditStreamComponent],
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
