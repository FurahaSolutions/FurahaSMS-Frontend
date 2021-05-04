import {Component, OnInit} from '@angular/core';
import {StreamService} from '../services/stream.service';

@Component({
  selector: 'app-view-stream',
  templateUrl: './view-stream.component.html',
  styleUrls: ['./view-stream.component.css']
})
export class ViewStreamComponent implements OnInit {

  constructor(public streamService: StreamService) {
  }

  ngOnInit() {
  }

}
