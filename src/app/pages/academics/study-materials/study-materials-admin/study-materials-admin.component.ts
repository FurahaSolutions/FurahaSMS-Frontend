import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';

@Component({
  selector: 'app-study-materials-admin',
  templateUrl: './study-materials-admin.component.html',
  styleUrls: ['./study-materials-admin.component.css']
})
export class StudyMaterialsAdminComponent {
  faPlusCircle = faPlusCircle;

  constructor() {
  }

}
