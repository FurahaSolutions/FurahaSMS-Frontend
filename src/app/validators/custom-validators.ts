import { map, switchMap } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';

export class CustomValidators {
  static emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  static userService: UsersService;

  constructor(userService: UsersService) {
    CustomValidators.userService = userService;
  }

  static emailExists = (control: FormControl) =>
    timer(500).pipe(
      switchMap(() => {
        if(CustomValidators.emailRegExp.test(control.value)) {
          console.log(CustomValidators.userService);
          return CustomValidators.userService.findIfEmailExists(control.value);
        }
        return of(false);
      }),
      map(exists => (exists ? {emailExists: true} : null))
    );

  static startEndDate(control: FormControl) {
    console.log(control.get('startDate')?.value);
    if(control.get('startDate')?.value > control.get('endDate')?.value) {
      return {startGreaterThanEnd: true};
    }
    return null;
  }
}
