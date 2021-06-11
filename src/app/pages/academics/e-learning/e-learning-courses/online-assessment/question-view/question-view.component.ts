import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IExamPaperQuestion } from '../../../../exam-bank/interfaces/exam-paper-question.interface';

interface IQuestionSelect {
  id: number;
  selected: number;
}

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuestionViewComponent),
      multi: true
    }
  ]
})
export class QuestionViewComponent implements OnInit, ControlValueAccessor {

  // eslint-disable-next-line
  @Input('active-question') activeQuestion = 0;
  // eslint-disable-next-line
  @Input('first-question') firstQuestion = true;
  // eslint-disable-next-line
  @Input('last-question') lastQuestion = false;
  // eslint-disable-next-line
  @Input('item-index') itemIndex = 0;
  @Input() question!: IExamPaperQuestion;

  // eslint-disable-next-line
  @Output('question-change') questionChange = new EventEmitter()
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  choices: boolean[] = [];
  value: IQuestionSelect | undefined;
  onChanges: (val: IQuestionSelect) => void = () => {};
  onTouched: () => void = () => {};

  selectChoice(k: number) {
    this.choices.fill(false);
    this.choices[k] = true;
    this.choices = [...this.choices];

    this.value = {id: this.question.id, selected: this.question.answers[k].id};
    this.onChanges(this.value);
  }

  ngOnInit(): void {
    this.choices = Array(this.question.answers.length).fill(false);
  }

  registerOnChange(fn: (val: IQuestionSelect) => void): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: { id: number; selected: number }): void {
    this.value = value;
  }

  activeQuestionChange(step: number) {
    this.questionChange.emit(step);
  }
}
