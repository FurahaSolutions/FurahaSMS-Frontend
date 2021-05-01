import {Component} from '@angular/core';
import {StreamService} from '../services/stream.service';

@Component({
  selector: 'app-create-stream',
  templateUrl: './create-stream.component.html',
  styleUrls: ['./create-stream.component.css']
})
export class CreateStreamComponent {

  constructor(public streamService: StreamService) {
  }

}
