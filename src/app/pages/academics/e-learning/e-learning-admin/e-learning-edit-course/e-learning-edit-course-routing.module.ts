import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ELearningAdminCourseComponent } from '../e-learning-admin-course/e-learning-admin-course.component';
import { ELearningCreateCourseComponent } from '../e-learning-create-course/e-learning-create-course.component';
import { ELearningEditCourseComponent } from './e-learning-edit-course.component';
import { EditOnlineAssessmentDetailsComponent } from './edit-online-assessment-details/edit-online-assessment-details.component';


const routes: Routes = [
  {
    path: ':id',
    data: {
      breadcrumb: null
    },
    component: ELearningAdminCourseComponent,
    children: [
      {
        path: 'edit-contents',
        component: ELearningEditCourseComponent,
        data: {
          breadcrumb: 'Edit Course'
        }
      },
      {
        path: 'edit',
        component: ELearningCreateCourseComponent,
        data: {
          breadcrumb: 'Edit Course'
        }
      }, {
        path: 'assessments/:id',
        component: EditOnlineAssessmentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningEditCourseRoutingModule {
}
