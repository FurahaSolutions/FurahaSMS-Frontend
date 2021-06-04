import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadMyProfiles } from './store/actions/my-profile.actions';
import { selectMyProfileState } from './store/selectors/my-profile.selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  profile$ = this.store.pipe(select(selectMyProfileState));

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadMyProfiles());
  }

}
