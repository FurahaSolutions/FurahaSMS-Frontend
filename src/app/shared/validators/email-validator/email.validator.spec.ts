import { FormControl } from '@angular/forms';
import { EmailValidatorDirective } from './email.validator';

describe('EmailValidatorDirective', () => {
  it('should have a function that validates correct emails', () => {
    const validator = new EmailValidatorDirective();
    expect(validator.validate(new FormControl('example@valid.com'))).toBeNull();
  });
  it('should have a function that invalidates incorrect emails', () => {
    const validator = new EmailValidatorDirective();
    expect(validator.validate(new FormControl('exampleInvalidEmail'))).toBeTruthy();
  });
});
