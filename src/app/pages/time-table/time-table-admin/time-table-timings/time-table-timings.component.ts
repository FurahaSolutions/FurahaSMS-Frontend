import { Component } from '@angular/core';
import { modalMixin } from 'src/app/shared/mixins/modal.mixin';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { CreateTimingTemplateComponent } from '../create-timing-template/create-timing-template.component';
import { TimingTemplateService } from '../../services/timing-template.service';

@Component({
  selector: 'app-time-table-timings',
  templateUrl: './time-table-timings.component.html',
  styleUrls: ['./time-table-timings.component.css']
})
export class TimeTableTimingsComponent extends modalMixin() {
  faPlusCircle = faPlusCircle;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  isOpen: boolean[] = [false];

  timings$ = this.timetableTimingService.all$;

  constructor(private modalService: BsModalService, private store: Store, private timetableTimingService: TimingTemplateService) {
    super(modalService, store);
  }

  newTimeTablePlan() {
    this.openModal({id: 0, component: CreateTimingTemplateComponent});
  }

}
