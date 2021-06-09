import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons/faLevelUpAlt';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons/faLevelDownAlt';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleUp';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent {

  @Input() activeQuestion = 0;
  @Input() question: any;
  @Input() i = 0;
  @Input() questionsLength = 0;
  @Input() editMode = false;
  @Output() edit = new EventEmitter();
  @Output() activeQuestionChange = new EventEmitter();
  @Output() deleteQuestion = new EventEmitter();
  @Output() reorderQuestions = new EventEmitter();
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  faTrash = faTrash;
  faLevelUpAlt = faLevelUpAlt;
  faLevelDownAlt = faLevelDownAlt;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;
  faCheckSquare = faCheckSquare;
  faSquare = faSquare;
  faArrowAltCircleUp = faArrowAltCircleUp;
  faArrowAltCircleDown = faArrowAltCircleDown;

  constructor() {
  }

  editRequest(action: string, i: number) {
    this.edit.emit({action, i});
  }

  activeQuestionPrevious() {
    this.activeQuestionChange.emit(-1);
  }

  activeQuestionNext() {
    this.activeQuestionChange.emit(1);
  }

  deleteQuestionRequest(i: number) {
    this.deleteQuestion.emit(i);
  }

  reorderQuestionsRequest(value: any) {
    this.reorderQuestions.emit(value);
  }
}
