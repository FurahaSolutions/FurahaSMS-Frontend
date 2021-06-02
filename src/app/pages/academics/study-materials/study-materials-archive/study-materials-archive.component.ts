import { Component} from '@angular/core';
import { StudyMaterialsService } from '../services/study-materials.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-study-materials-archive',
  templateUrl: './study-materials-archive.component.html',
  styleUrls: ['./study-materials-archive.component.css']
})
export class StudyMaterialsArchiveComponent {
  studyMaterials$ = this.studyMaterialsService.getAll({active: true})
    .pipe(tap((res: any) => this.studyMaterials = res));
  studyMaterials: any[] = [];
  filterString = '';

  constructor(
    private studyMaterialsService: StudyMaterialsService
  ) {
  }

  get filteredStudyMaterials(): any[] {
    return this.studyMaterials
      .filter(({title}: { title: string }) => title.includes(this.filterString));
  }

  getLink(id: number, type: string): (string | number)[] {
    if(type === 'pdf') {
      return ['/academics', 'study-materials', id, 'view'];
    }
    return ['/academics', 'study-materials', id, 'download'];
  }

}
