import { Component } from '@angular/core';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { TransformInterface } from 'src/app/interfaces/transforms.interfaces';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-class-level',
  templateUrl: './create-class-level.component.html',
  styleUrls: ['./create-class-level.component.css']
})
export class CreateClassLevelComponent {

  transforms: TransformInterface[] = [
    {from: 'abbr', to: 'abbreviation'},
    {from: 'parentCategory', to: 'classLevelCategory'}
  ];
  fields = [
    {name: 'name', type: 'text', validators: [Validators.required]},
    {name: 'active', type: 'boolean', validators: []},
    {name: 'abbreviation', type: 'text', validators: [Validators.required, Validators.maxLength(5)]},
    {name: 'description', type: 'html', validators: []}
  ];

  constructor(public classLevelService: ClassLevelService) {
  }


}
