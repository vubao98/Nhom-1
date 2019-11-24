import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProspectModel } from '../../../../shared/models/index';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProspectService, DataService } from '../../../../shared/services/index';
import { routerTransition } from '../../../../router.animations';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';

@Component({
  selector: 'app-prospect-spec-history',
  templateUrl: './prospect-spec-history.component.html',
  styleUrls: ['./prospect-spec-history.component.scss'],
  animations: [routerTransition()]

})
export class ProspectSpecHistoryComponent implements OnInit {
  prospect$:  Observable<ProspectModel>;
  public isCollapsedMain = false;
  public isCollapsedAddress = false;
  public isCollapsedDesc = false;
  handlerStr: string;
  constructor(
    private route: ActivatedRoute,
    private prospectService: ProspectService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.prospect$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
    this.prospectService.viewHistory(params.get('id')));
    this.prospect$.subscribe(result => {
      if (result.handler) {
        this.dataService.getSettingTypeItem('prospect-handler', result.handler).subscribe(data => this.handlerStr = data.text);
      }
    });
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }

}
