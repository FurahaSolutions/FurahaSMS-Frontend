import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectMyProfileState } from '../store/selectors/my-profile.selectors';

@Component({
  selector: 'app-my-profile-info',
  templateUrl: './my-profile-info.component.html',
  styleUrls: ['./my-profile-info.component.css']
})
export class MyProfileInfoComponent {
  profile$ = this.store.pipe(select(selectMyProfileState));

  constructor(private store: Store) {
  }

}
