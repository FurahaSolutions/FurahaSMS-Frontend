import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { selectExamPaperItemState } from '../../store/selectors/exam-paper.selectors';

@Component({
  selector: 'app-admin-exam-paper-view',
  templateUrl: './admin-exam-paper-view.component.html',
  styleUrls: ['./admin-exam-paper-view.component.css']
})
export class AdminExamPaperViewComponent {
  faChevronRight = faChevronRight;
  faEdit = faEdit;
  faInfoCircle = faInfoCircle;
  examPaper$: Observable<any> = (this.route.parent as ActivatedRoute).paramMap.pipe(
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
            isCorrect
          }))
        }));
      }
    }));
  questions: any[] = [];
  activeQuestion = 0;


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

}
