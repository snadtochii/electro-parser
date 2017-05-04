import { Component, OnInit } from '@angular/core';

import { Case, CaseInfo, PatientsInfo } from '../../models/index';
import { SharedDataService } from '../../services/index';

///development
import {CASESMOCK} from '../../models/case-mock';

@Component({
  selector: 'app-latest-done',
  templateUrl: './latest-done.component.html',
  styleUrls: ['./latest-done.component.css']
})
export class LatestDoneComponent implements OnInit {

  cases: Case[];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {

  }

  onClick() {
    this.sharedDataService.getLatestCases().subscribe(res => this.cases = res);

    console.log(this.cases)
  }
}