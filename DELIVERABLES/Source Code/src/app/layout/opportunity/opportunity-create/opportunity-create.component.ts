
import { Component, OnInit } from '@angular/core';
import { OpportunityModel } from '../../../shared/models/opportunity/opportunity.model';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from '../../../shared/services/index';

@Component({
  selector: 'app-opportunity-create',
  templateUrl: './opportunity-create.component.html',
  styleUrls: ['./opportunity-create.component.scss'],
  animations: [routerTransition()]
})
export class OpportunityCreateComponent implements OnInit {
  opportunityModel: OpportunityModel = new OpportunityModel();
  prospectId;
  isLoading = false;

  constructor(private route: ActivatedRoute,
    private prospectService: ProspectService,
  ) { }
  ngOnInit() {
    // this.prospectId = this.route.snapshot.paramMap.get('id');
    // if (this.prospectId) {
    //   this.route.params.subscribe(params => {
    //     this.prospectService.view(params.id).subscribe(data => {
    //       this.opportunityModel.prospectCustomer = {
    //         id: (data.id).toString(),
    //         name: data.lastName + ' ' + data.firstName
    //       };
    //       this.opportunityModel.prospectSource = data.source;
    //       this.opportunityModel.assignTo = data.assignTo;

    //       this.isLoading = true;
    //     }, err => {
    //       // this.isNotExist = true;
    //     });
    //   });
    // } else {
    //   this.isLoading = true;
    // }
    this.route.params.subscribe(params => {
      if (params.moduleName === 'customer') {
        this.opportunityModel.customer = {
          id: params.moduleItemId,
          name: params.moduleItemName,
        };
      }
      if (params.moduleName === 'contact') {
        this.opportunityModel.contacts = [{
          id: params.moduleItemId,
          text: params.moduleItemName
        }];
      }
      if (params.moduleName === 'prospect') {
        this.opportunityModel.prospectCustomer = {
          id: params.prospectId,
          name: params.prospectName
        };
        this.opportunityModel.phase = params.step;
      }
    });
  }

}
