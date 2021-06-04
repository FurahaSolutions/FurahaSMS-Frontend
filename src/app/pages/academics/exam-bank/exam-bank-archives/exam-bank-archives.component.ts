import { Component } from '@angular/core';
import { ExamPaperService } from '../services/exam-paper.service';

@Component({
  selector: 'app-exam-bank-archives',
  templateUrl: './exam-bank-archives.component.html',
  styleUrls: ['./exam-bank-archives.component.css']
})
export class ExamBankArchivesComponent {
  examPapers$ = this.examPaperService.getRecentExamPapers();

  constructor(private examPaperService: ExamPaperService) {
  }
}
