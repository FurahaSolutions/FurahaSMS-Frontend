import { Component } from '@angular/core';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-class-level',
  templateUrl: './edit-class-level.component.html',
  styleUrls: ['./edit-class-level.component.css']
})
export class EditClassLevelComponent {
  transforms: TransformInterface[] = [{from: 'parentCategory', to: 'classLevelCategory'}];
  fields = [
    {name: 'name', label: 'Name', type: 'text', validators: [Validators.required]},
    {name: 'active', label: 'Active', type: 'boolean', validators: []},
    {
      name: 'abbreviation',
      label: 'Abbreviation',
      type: 'text',
      validators: [Validators.required, Validators.maxLength(5)]
    },
    {name: 'description', label: 'Description', type: 'html', validators: []}
  ];

  constructor(public classLevelService: ClassLevelService) {
  }
}
