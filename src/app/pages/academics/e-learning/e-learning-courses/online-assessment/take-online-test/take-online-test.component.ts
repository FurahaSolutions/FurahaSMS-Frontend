import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder } from '@angular/forms';
import { exhaustMap, map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { combineLatest } from 'rxjs';
import { OnlineAssessmentService } from '../../../services/online-assessment.service';
import { subscribedContainerMixin } from '../../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-take-online-test',
  templateUrl: './take-online-test.component.html',
  styleUrls: ['./take-online-test.component.css']
})
export class TakeOnlineTestComponent extends subscribedContainerMixin() {

  faPlay = faPlay;
  questionsForm = this.fb.group({
    choices: this.fb.array([])
  });

  onlineAssessmentId$ = this.activatedRoute$.paramMap.pipe(
    map(params => Number(params.get('id')))
  );
  onlineAssessment$ = this.onlineAssessmentId$.pipe(
    mergeMap(assessmentId =>
      this.onlineAssessmentService.getAssessmentWithId({assessmentId, withQuestions: true})),
    map((assessment) => ({...assessment, periodInMinutes: this.getTimePeriodInMinutes(assessment.period)}))
  );
  questions$ = this.onlineAssessment$.pipe(
    map(({questions}) => questions),
    tap(questions => {

      while (this.choices.length) {
        this.choices.removeAt(0);
      }
      questions?.forEach((item: any) => this.choices.push(this.fb.control({
        id: item.id,
        selected: null
      })));
    })
  );

  questionNumbers$ = this.questions$.pipe(
    map((questions: any) => questions.map(({points}: any, key: any) => ({
      position: key + 1,
      points,
      size: 2.5 * points / Math.min(...questions.map(({points: rem}: any) => rem)) + 'rem'
    })))
  );

  v$ = combineLatest([this.questions$, this.onlineAssessment$, this.questionNumbers$]).pipe(
    map(([questions, onlineAssessment, questionNumbers]) => ({
      questions,
      onlineAssessment,
      questionNumbers
    }))
  );

  activeQuestion = 0;

  get choices() {
    return this.questionsForm.get('choices') as FormArray;
  }

  constructor(
    private activatedRoute$: ActivatedRoute,
    private onlineAssessmentService: OnlineAssessmentService,
    private fb: FormBuilder
  ) {
    super();
  }

  submitAssessment() {
    this.onlineAssessmentId$.pipe(
      exhaustMap(onlineAssessmentId => this.onlineAssessmentService.submitAssessment({
        onlineAssessmentId,
        data: this.choices.value
      })),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  getTimePeriodInMinutes(iso8601Duration: string) {
    // eslint-disable-next-line max-len
    const iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
    const matches = iso8601Duration.match(iso8601DurationRegex);

    const day = {
      sign: matches?.[1] ? '+' : '-',
      years: matches?.[2] ?? 0,
      months: matches?.[3] ?? 0,
      weeks: matches?.[4] ?? 0,
      days: matches?.[5] ?? 0,
      hours: matches?.[6] ?? 0,
      minutes: matches?.[7] ?? 0,
      seconds: matches?.[8] ?? 0
    };

    return Number(day.days) * 24 * 60 + Number(day.hours) * 60 + Number(day.minutes) + Number(day.seconds)/60;
  }

}
