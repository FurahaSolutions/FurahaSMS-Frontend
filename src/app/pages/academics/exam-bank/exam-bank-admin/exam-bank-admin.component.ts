import { Component} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';
import { ExamPaperService } from '../services/exam-paper.service';

@Component({
  selector: 'app-exam-bank-admin',
  templateUrl: './exam-bank-admin.component.html',
  styleUrls: ['./exam-bank-admin.component.css']
})
export class ExamBankAdminComponent extends subscribedContainerMixin() {
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;
  faEdit = faEdit;
  faEye = faEye;
  faTrash = faTrash;
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
