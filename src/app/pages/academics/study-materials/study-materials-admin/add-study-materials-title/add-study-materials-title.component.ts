import { Component, Input } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare';

@Component({
  selector: 'app-add-study-materials-title',
  templateUrl: './add-study-materials-title.component.html',
  styleUrls: ['./add-study-materials-title.component.css'],
})
export class AddStudyMaterialsTitleComponent {

  @Input() items: any[] = [];
  faBookmark = faBookmark;
  faPlusSquare = faPlusSquare;

  constructor() {
  }


}
