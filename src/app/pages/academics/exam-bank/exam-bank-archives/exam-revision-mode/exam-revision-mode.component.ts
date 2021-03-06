import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducers';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';

@Component({
  selector: 'app-exam-revision-mode',
  templateUrl: './exam-revision-mode.component.html',
  styleUrls: ['./exam-revision-mode.component.css']
})
export class ExamRevisionModeComponent {
  faChevronRight = faChevronRight;
  faInfoCircle = faInfoCircle;
  questions: any[] = [];
  examPaper$ = (this.route.parent as ActivatedRoute).paramMap.pipe(
    map(params => params.get('id')),
    mergeMap(id => this.store.pipe(select(selectExamPaperItemState(id)))),
    tap(res => {
      if(res) {
        this.questions = res.questions.map((item: any) => ({
          id: item.id,
          correctAnswerDescription: item.correct_answer_description,
          multipleAnswers: item.multiple_answers,
          multipleChoices: item.multiple_choices,
          points: item.points,
          description: item.description,
          tags: item.tags_value,
          answers: item.answers_value.map(({id, description, is_correct: isCorrect}: any) => ({
            id,
            description,
            isCorrect,
            selected: false,
          })),
          validated: false
        }));
      }
    }));
  activeQuestion = 0;
  showInstructions = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  setActiveQuestion(i: number) {
    this.activeQuestion = i;
    (document.querySelector(`#question-section`) as HTMLDivElement).focus();
  }

  handleAnswerChange(_event: any) {
  }
}
