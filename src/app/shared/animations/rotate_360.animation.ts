import { animate, AnimationMetadata, state, style, transition, trigger } from '@angular/animations';

export const rotate360Metadata: AnimationMetadata = trigger('rotate360', [
  state('default', style({transform: 'rotate(0)'})),
  state('rotated', style({transform: 'rotate(-360deg)'})),
  transition('* => *', animate('1500ms ease-out')),
]);
