import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../../../store/reducers';
import {QuestionViewComponent} from './question-view.component';

describe('QuestionViewComponent', () => {
  let component: QuestionViewComponent;
  let fixture: ComponentFixture<QuestionViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeTestingModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [QuestionViewComponent],
      providers: [
        reducerProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewComponent);
    component = fixture.componentInstance;
    component.question = {
      choices: [],
      points: 1,
      description: '',
      id: 1,
      tags: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('function selectChoice()', () => {
    it('should call onChanges', () => {
      component.question = {choices: [{id: 1, description: 'choice 1'}], description: '', id: 1, points: 1};
      component.registerOnChange(() => {
      });
      fixture.detectChanges();
      const spyOnChanges = spyOn(component, 'onChanges');
      component.selectChoice(0);
      expect(spyOnChanges).toHaveBeenCalled();
    });
  });
});
