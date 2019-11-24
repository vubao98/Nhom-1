import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../../shared/services';

@Component({
  selector: 'app-contact-campaign',
  templateUrl: './contact-campaign.component.html',
  styleUrls: ['./contact-campaign.component.scss']
})
export class ContactCampaignComponent implements OnInit {

  id: string;
  name: string;
  fullName: string;
  email: string;
  phone: string;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.name = 'Contact';
      this.contactService.view(this.id).subscribe(result => {
        this.fullName = result.name;
        this.email = result.email;
        this.phone = result.companyPhone;
      });
    });
  }

}
