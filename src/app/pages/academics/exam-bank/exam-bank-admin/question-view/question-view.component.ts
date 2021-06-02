import { Component, EventEmitter, Input, Output } from '@angular/core';

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
