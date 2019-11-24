import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../shared/services';

@Component({
  selector: 'app-customer-campaign',
  templateUrl: './customer-campaign.component.html',
  styleUrls: ['./customer-campaign.component.scss']
})
export class CustomerCampaignComponent implements OnInit {

  id: string;
  name: string;
  fullName: string;
  email: string;
  phone: string;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.name = 'Customer';
      this.customerService.view(this.id).subscribe(result => {
        this.fullName = result.name;
        this.email = result.emailOfficial;
        this.phone = result.phoneNumberOfficial;
      });
    });
    // this.route.parent.params.subscribe(value => {
    //   this.id = value.id;
    //   this.name = 'Prospect';
    //   this.prospectService.view(this.id).subscribe(result => {
    //     this.fullName = result.fullName;
    //     this.email = result.email;
    //     this.phone = result.phoneNumberCustomer;
    //   });
    // });
  }

}
