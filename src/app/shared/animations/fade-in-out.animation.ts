import { animate, AnimationMetadata, state, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimationMetadata: AnimationMetadata = trigger('openClose', [
  state('*', style({
    height: '200px',
    opacity: 1,
  })),
  state('void', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'greenyellow'
  })),
  transition(':leave', [
    animate('200ms')
  ]),
  transition(':enter', [
    animate('300ms')
  ]),
]);
