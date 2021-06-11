import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IChoice {
  id: number;
  description: string;
  isCorrect?: boolean;
}

interface IQuestion {
  choices: IChoice[];
  tags?: string[];
  description: string;
  id: number;
  points: number;
}

interface IAssessment {
  id: number;
  name: string;
  description?: string;
  questions?: IQuestion[];
  totalPoints?: number;
  ['e_learning_topic_id']: number;
  ['exam_paper_name']: string;
  ['available_at']: string;
  ['closing_at']: string;
  ['period']: string;
  ['unit_level_name']: string;
}

@Injectable({
  providedIn: 'root'
})
export class OnlineAssessmentService {

  constructor(private http: HttpClient) {
  }

  urlWithId = (topicId: number, assessmentId: number) =>
    `api/e-learning/course-content/topics/${topicId}/online-assessments${assessmentId ? `/${assessmentId}` : ''}`;

  save = ({topicId, data, assessmentId}: any) => this.http.post(this.urlWithId(topicId, assessmentId), {
    ['available_at']: data.availableDateTime,
    ['closing_at']: data.closedDateTime,
    period: data.period,
    name: data.name,
    _method: data.id > 0 ? 'PATCH' : 'POST'
  });

  deleteAssessmentWithId = ({topicId, assessmentId}: any) => this.http.delete(this.urlWithId(topicId, assessmentId));

  getAssessmentWithId = ({assessmentId, withQuestions = false}: { assessmentId: number; withQuestions?: boolean }) =>
    this.http.get<IAssessment>(`api/e-learning/online-assessments/${assessmentId}`, {params: {withQuestions}});

  submitAssessment({data, onlineAssessmentId}: { data: any; onlineAssessmentId: number }) {
    return this.http.post(`api/e-learning/online-assessments/${onlineAssessmentId}`, data);
  }
}
