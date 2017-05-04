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
  data: any;
  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.cs$.subscribe(data=>{
      this.data = data.caseInfo;
      console.log(data);
    })
    // this.data = CASEMOCK.caseInfo;
    console.log(this.data)
  }
  ngOnInit() { }
}
