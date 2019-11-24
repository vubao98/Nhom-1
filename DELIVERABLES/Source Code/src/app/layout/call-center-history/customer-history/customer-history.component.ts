import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OpportunityService, CustomerService } from '../../../shared/services';
import { InvoiceInfo } from '../../../shared/models/invoice/invoice-info';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.scss']
})
export class CustomerHistoryComponent implements OnInit {
  @Input() phoneNumber: string;
  @Input() customers: any;
  contacts: any;
  opportunityId;
  listContact = [];
  invoiceInfo: InvoiceInfo;
  isShowMore = false;
  dayInvoiceLatest;
  constructor(
    private router: Router,
    private opportunityService: OpportunityService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.opportunityService.getOpportunitiesByModuleItemId('customer', this.customers[0].objectId, 0, 1)
      .subscribe(result => {
        this.opportunityId = result.items.length ? result.items[0].id : null;
      });
    this.customerService.getContactListByCustomer(this.customers[0].objectId)
      .subscribe(res => {
        this.listContact = res;
        this.listContact.forEach(element => {
          this.opportunityService.getOpportunitiesByModuleItemId('contact', element.id, 0, 1)
            .subscribe(result => {
              element.isOpportunity = (result.items && result.items.length) ? true : false;
            });
        });
      });
      // this.customerService.getProductPriceListByCustomer(this.customers[0].objectId)
      // .subscribe(data => {
      //   this.invoiceInfo = data;
      //   if (this.invoiceInfo.invoiceLastest) {
      //     this.dayInvoiceLatest = DateTimeConvertHelper.fromTimestampToDtStr(this.invoiceInfo.invoiceLastest.invoice.invoiceDate);
      //   }
      // });
  }
  detailOpportunity() {
    this.router.navigate([`/customer/detail/${this.customers[0].objectId}/opportunity`]);
  }
  detailCustomer() {
    this.router.navigate([`/customer/detail/${this.customers[0].objectId}`]);
  }

  detailOpportunityItem(id: number | string) {
    this.router.navigate([`/dashboard`]);
    setTimeout(() => {
      this.router.navigate([`/contact/detail/${id}/opportunity`]);
    }, 10);

  }

}