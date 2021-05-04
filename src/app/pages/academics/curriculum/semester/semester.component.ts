import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { SemesterService } from './services/semester.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  categories: any;

  constructor(
    private store: Store<AppState>,
    private semesterService: SemesterService
  ) { }
  ngOnInit() {
    this.categories = this.semesterService;
  }

}
