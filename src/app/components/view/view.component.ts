import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {
  @Input() title = '';
  @Input() service: { getItemById: (id: number) => Observable<any> } = {getItemById: () => of({})};
  item$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.service.getItemById(id))
  );

  constructor(private route: ActivatedRoute) {
  }
}
