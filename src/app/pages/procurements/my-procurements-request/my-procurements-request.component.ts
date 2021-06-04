import { Component, OnInit } from '@angular/core';
import { ProcurementService } from 'src/app/services/procurement.service';

@Component({
  selector: 'app-my-procurements-request',
  templateUrl: './my-procurements-request.component.html',
  styleUrls: ['./my-procurements-request.component.css']
})
export class MyProcurementsRequestComponent implements OnInit {
  itemService: any;

  constructor(private procurementService: ProcurementService) {
  }

  ngOnInit() {
    this.itemService = {
      ...this.procurementService,
      all$: this.procurementService.allMyRequest$,
      deleteItem: this.procurementService.deleteProcurementRequest
    };

  }

}
