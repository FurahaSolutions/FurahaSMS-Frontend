import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';



@NgModule({
    declarations: [FormErrorsComponent],
    exports: [
        FormErrorsComponent
    ],
    imports: [
        CommonModule,
        ReactiveComponentModule
    ]
})
export class FormErrorsModule { }
