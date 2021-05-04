import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/store/reducers';
import {StreamService} from './services/stream.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  categories: any;

  constructor(
    private store: Store<AppState>,
    private streamService: StreamService
  ) {
  }

  ngOnInit() {
    this.categories = this.streamService;
  }

}
