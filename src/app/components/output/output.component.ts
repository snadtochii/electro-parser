import { Component, OnInit, Input } from '@angular/core';

import { Case, CaseInfo } from '../../models/index';
import { SharedDataService } from '../../services/index';

//development
import { CASEMOCK } from '../../models/case-mock';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  caseInfo: CaseInfo;
  flag: boolean = true;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.cs$.subscribe(data => {
      this.caseInfo = data.caseInfo;
    });
  }

  changeCaseType(surgeryType: string) {
    this.caseInfo.surgeryType = surgeryType;
    this.sharedDataService.updateCase(this.caseInfo);
    this.flag = true;
  }
}
