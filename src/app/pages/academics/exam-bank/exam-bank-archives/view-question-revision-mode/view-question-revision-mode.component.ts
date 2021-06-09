import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-view-question-revision-mode',
  templateUrl: './view-question-revision-mode.component.html',
  styleUrls: ['./view-question-revision-mode.component.css']
})
export class ViewQuestionRevisionModeComponent implements OnInit, OnChanges {

  @Input() activeQuestion = 0;
  @Input() question: any;
  @Input() i = 0;
  @Input() questionsLength = 0;
  @Output() activeQuestionChange = new EventEmitter();
  @Output() answerChange = new EventEmitter();
  faCheck = faCheck;
  answers: any;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faTimes = faTimes;
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  constructor() { }

  ngOnInit() {
    this.answers = this.question.answers;
  }
  activeQuestionPrevious() {
    this.activeQuestionChange.emit(-1);
  }
  activeQuestionNext() {
    this.activeQuestionChange.emit(1);
  }
  emitChangedAnswer(k: number) {
    if (!this.question.multipleAnswers) {
      this.question.answers = this.question.answers.map((element: any) => ({
        ...element,
        selected: false
      }));
      this.question.answers[k].selected = true;
      this.answers = this.question.answers;
    }
    this.answerChange.emit(this.answers);
  }
  ngOnChanges(changes: SimpleChanges) {
    const question: SimpleChange = changes.question;
    if (question && question.currentValue) {
      this.answers = this.question.answers;
    }
  }
  answerSelected(answers: any[]) {
    return answers.every(({ selected }) => !selected );
  }
}
