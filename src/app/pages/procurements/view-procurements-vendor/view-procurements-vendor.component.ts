import { Component } from '@angular/core';
import { ProcurementService } from 'src/app/services/procurement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-procurements-vendor',
  templateUrl: './view-procurements-vendor.component.html',
  styleUrls: ['./view-procurements-vendor.component.css']
})
export class ViewProcurementsVendorComponent {
  procurementVendor$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    mergeMap(id => this.procurementService.getVendor(id)));

  constructor(
    private procurementService: ProcurementService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


}
