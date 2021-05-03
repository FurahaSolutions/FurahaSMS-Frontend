import { Component } from '@angular/core';
import { StreamService } from '../services/stream.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stream',
  templateUrl: './create-stream.component.html',
  styleUrls: ['./create-stream.component.css']
})
export class CreateStreamComponent {
  fields = [
    {name: 'name', label: 'Stream Name', type: 'text', validators: [Validators.required]},
    {name: 'associated_color', label: 'Assign Color', type: 'color', validators: [Validators.required]},
    {name: 'active', label: 'Active', type: 'boolean', validators: []},
    {name: 'abbreviation', label: 'Abbreviation', type: 'boolean', validators: [Validators.required]},
  ];

  constructor(public streamService: StreamService) {
  }

}
