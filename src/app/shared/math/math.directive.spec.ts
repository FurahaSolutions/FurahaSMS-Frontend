import {MathDirective} from './math.directive';
import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppLoadingBubbleModule} from '../../modules/app-loading-bubble';

describe('MathDirective', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule
      ]
    });
  }));
  it('should create an instance', () => {
    // const directive = new MathDirective();
    // expect(directive).toBeTruthy();
  });
});
