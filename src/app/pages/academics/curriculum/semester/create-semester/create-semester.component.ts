import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { SemesterService } from '../services/semester.service';

@Component({
  selector: 'app-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.css']
})
export class CreateSemesterComponent {
  fields = [
    {name: 'name', label: 'Semester Name', type: 'text', validators: [Validators.required]},
    {name: 'active', label: 'Active', type: 'boolean', validators: []},
    {name: 'abbreviation', label: 'Abbreviation', type: 'text', validators: [Validators.required]},
  ];

  constructor(public semesterService: SemesterService) { }

}
