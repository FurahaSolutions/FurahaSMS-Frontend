import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons/faAlignJustify';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons/faExpandAlt';
import { StudyMaterialsService } from '../../services/study-materials.service';
import { subscribedContainerMixin } from '../../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  styleUrls: ['./view-study-material.component.css']
})
export class ViewStudyMaterialComponent extends subscribedContainerMixin() implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faAlignJustify = faAlignJustify;
  faExpandAlt = faExpandAlt;
  pdf: any;
  outline: any[] = [];
  totalPages = 0;
  isLoaded = false;
  page = 1;
  pdfSrc = '';
  studyMaterial$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.studyMaterialService.getMaterialWithId(id)),
    takeUntil(this.destroyed$));
  studyMaterial: any;
  zoom = 1;
  showOutline = true;
  pdfSrc$ = this.studyMaterial$.pipe(
    switchMap(studyMaterial =>
      this.studyMaterialService.downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path)
    ),
    map(res => window.URL.createObjectURL(res))
  );

  constructor(
    private studyMaterialService: StudyMaterialsService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    // alert('got you');
    (window as any).pdfWorkerSrc = '/pdf.worker.js';
    this.studyMaterial$.pipe(
      tap(studyMaterial => {
        this.studyMaterialService.downloadDocumentWithFilePath(studyMaterial.file_document_info.file_path)
          .pipe(takeUntil(this.destroyed$))
          .subscribe(res => {
            this.pdfSrc = window.URL.createObjectURL(res);
          });
      }))
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        this.studyMaterial = res;
      });
  }

  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
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

  zoomIn() {
    this.zoom = Math.max(0, this.zoom - 0.1);
  }

  zoomOut() {
    this.zoom = Math.min(4, this.zoom + 0.1);
  }

  goFullScreen() {
    (document.querySelector('#docSection') as HTMLElement).requestFullscreen().then();
  }

}
