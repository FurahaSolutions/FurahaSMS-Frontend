import { Component} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ExamPaperService } from '../services/exam-paper.service';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-exam-bank-admin',
  templateUrl: './exam-bank-admin.component.html',
  styleUrls: ['./exam-bank-admin.component.css']
})
export class ExamBankAdminComponent extends subscribedContainerMixin() {
  examPapers$ = this.examPaperService.getByFilter({self: true});
  deleting: boolean[] = [false];

  constructor(
    private examPaperService: ExamPaperService
  ) {
    super();
  }

  deleteItem(data: { index: number; id: number; name: string }) {
    const {index, id, name} = data;
    const deletionConfirmed = confirm(`Are you sure you wish to delete exam paper "${name}" ?`);
    if(deletionConfirmed) {
      this.deleting[index] = true;
      this.examPaperService.deleteItem(id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.deleting[index] = false;
        }, () => {
          this.deleting[index] = false;
        });
    }
  }
}
