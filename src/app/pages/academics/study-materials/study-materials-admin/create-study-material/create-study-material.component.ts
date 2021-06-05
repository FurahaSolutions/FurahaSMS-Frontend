import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnitsService } from 'src/app/services/units.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { map, mergeMap, takeUntil} from 'rxjs/operators';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-study-material',
  templateUrl: './create-study-material.component.html',
  styleUrls: ['./create-study-material.component.css']
})
export class CreateStudyMaterialComponent extends subscribedContainerMixin(formMixin()) implements OnInit, OnDestroy {
  page = 1;
  totalPages = 0;
  isLoaded = false;
  units$= this.unitService.getAll();
  units: any[] = [];
  classLevels$ = this.classLevelService.getAll();
  classLevels: any[] = [];
  formClassLevels = [false];
  pdfSrc = '';
  pdf: PDFDocumentProxy | undefined;
  outline: any[] = [];
  pdfFile: File | undefined;
  studyMaterialForm= this.fb.group({
    title: ['', [Validators.required]],
    pdfFile: [null, [Validators.required]],
    units: this.fb.array([], Validators.required),
    classLevels: this.fb.array([], Validators.required)
  });
  formUnits = [false];

  constructor(
    private unitService: UnitsService,
    private classLevelService: ClassLevelService,
    private studyMaterialService: StudyMaterialsService,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.units$.pipe(takeUntil(this.destroyed$))
      .subscribe(units => this.units = units);
    this.classLevels$.pipe(takeUntil(this.destroyed$))
      .subscribe(classLevels => this.classLevels = classLevels);

    (window as any).pdfWorkerSrc = '/pdf.worker.js';
  }

  onFileSelected() {
    const $pdf: any = document.querySelector('#pdfFile');

    this.pdfFile = (($pdf as HTMLInputElement).files as FileList)[0];

    if(typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(this.pdfFile);
    }
  }

  loadOutline() {

    this.pdf?.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  afterLoadComplete(pdf: PDFDocumentProxy) {

    this.pdf = pdf;
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
    this.loadOutline();
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  saveStudyMaterial() {
    this.isSubmitting = true;
    this.studyMaterialService.uploadDocument(this.pdfFile as File).pipe(
      map(({data}) => data),
      mergeMap(({id: docId}) => this.studyMaterialService.saveStudyMaterialInfo({
        docId,
        data: this.studyMaterialForm.value
      })))
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isSubmitting = false;
      }, () => this.isSubmitting = false);
  }

  get unitsControl(): FormArray {
    return this.studyMaterialForm.get('units') as FormArray;
  }

  get classLevelsControl(): FormArray {
    return this.studyMaterialForm.get('classLevels') as FormArray;
  }

  updateUnits() {
    setTimeout(() => {
      const filteredUnits = this.units
        .filter((_unit, i) => this.formUnits[i])
        .map(({id}) => id);
      this.unitsControl.controls.splice(0, this.unitsControl.controls.length);
      filteredUnits.forEach(_ => this.unitsControl.push(this.fb.control('')));
      this.unitsControl.setValue(filteredUnits);
      this.unitsControl.updateValueAndValidity();
    }, 0);

  }

  updateClassLevels() {
    setTimeout(() => {
      const filterdClassLevels = this.classLevels
        .filter((_unit, i) => this.formClassLevels[i])
        .map(({id}) => id);
      this.classLevelsControl.controls.splice(0, this.classLevelsControl.controls.length);
      filterdClassLevels.forEach(_ => this.classLevelsControl.push(this.fb.control('')));
      this.classLevelsControl.setValue(filterdClassLevels);
      this.classLevelsControl.updateValueAndValidity();
    }, 0);

  }

}
