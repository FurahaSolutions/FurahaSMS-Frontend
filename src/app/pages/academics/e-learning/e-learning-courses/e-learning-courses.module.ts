import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveComponentModule } from '@ngrx/component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ELearningCourseModule } from '../e-learning-course/e-learning-course.module';
import { ELearningTopicMaterialsModule } from '../e-learning-topic-materials/e-learning-topic-materials.module';
import { ELearningTopicObjectivesModule } from '../e-learning-topic-objectives/e-learning-topic-objectives.module';
import { TopicOnlineAssessmentListModule } from '../topic-online-assessment-list/topic-online-assessment-list.module';
import { ELearningCoursesRoutingModule } from './e-learning-courses-routing.module';
import { ELearningCoursesComponent } from './e-learning-courses.component';
import { ELearningCourseItemComponent } from './e-learning-course-item/e-learning-course-item.component';
import { ELearningCourseViewComponent } from './e-learning-course-view/e-learning-course-view.component';

@NgModule({
  declarations: [
    ELearningCoursesComponent,
    ELearningCourseItemComponent,
    ELearningCourseViewComponent,

  ],
  imports: [
    CommonModule,
    ELearningCoursesRoutingModule,
    ELearningCourseModule,
    AppLoadingBubbleModule,
    FormsModule,
    ELearningTopicMaterialsModule,
    ELearningTopicObjectivesModule,
    ModalModule.forRoot(),
    TopicOnlineAssessmentListModule,
    ReactiveComponentModule,
    FontAwesomeModule
  ]
})
export class ELearningCoursesModule {
}
