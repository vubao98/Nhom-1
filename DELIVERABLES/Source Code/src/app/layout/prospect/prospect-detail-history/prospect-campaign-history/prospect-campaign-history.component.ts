import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService } from '../../../../shared/services';
import { ProspectModel } from '../../../../shared/models';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prospect-campaign-history',
  templateUrl: './prospect-campaign-history.component.html',
  styleUrls: ['./prospect-campaign-history.component.scss']
})
export class ProspectCampaignHistoryComponent implements OnInit {

  id: string;
  name: string;
  fullName: string;
  email: string;
  phone: string;
  constructor(
    private route: ActivatedRoute,
    private prospectService: ProspectService,
  ) { }
  prospect$: Observable<ProspectModel>;
  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.name = 'Prospect';
      this.prospectService.view(this.id).subscribe(result => {
        this.fullName = result.fullName;
        this.email = result.email;
        this.phone = result.phoneNumberCustomer;
      });
    });
  }

}
