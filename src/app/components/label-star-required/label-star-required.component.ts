import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-label-star-required',
  templateUrl: './label-star-required.component.html',
  styleUrls: ['./label-star-required.component.css']
})
export class LabelStarRequiredComponent {
  faStar = faStar;
  constructor() {
  }
}

@Component({
  selector: 'app-star-required',
  template: `<fa-icon [icon]="faStar" class="required"></fa-icon>`,
  styleUrls: ['./label-star-required.component.css']
})

export class StarRequiredComponent {
  faStar = faStar;
  constructor() {
  }
}
