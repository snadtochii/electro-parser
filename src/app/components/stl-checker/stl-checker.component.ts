import { Component, OnInit } from '@angular/core';

import { SharedDataService, ConfigService, StlCheckerService } from '../../services/index';

import { CaseInfo, Config } from '../../models/index';

import * as path from 'path';


@Component({
  selector: 'app-stl-checker',
  templateUrl: './stl-checker.component.html',
  styleUrls: ['./stl-checker.component.css']
})
export class StlCheckerComponent implements OnInit {

  private defaultMessage: string = 'no STL(s)';
  private init: boolean = false;

  caseInfo: CaseInfo;
  config: Config;
  stlsArr: string[] = [];
  message: string;
  isLoading: boolean = false;
  options: any = {
    filter: /\.stl/,
  }

  constructor(private sharedDataService: SharedDataService, private stlCheckerService: StlCheckerService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.config$.subscribe(res => {
      this.config = res;
      this.checkFolder(this.config, this.caseInfo, this.options)
    });

    this.sharedDataService.cs$.subscribe(data => {
      this.caseInfo = data.caseInfo;
      this.checkFolder(this.config, this.caseInfo, this.options)
      this.init = true;
    });
  }

  checkFolder(config: any, caseInfo: CaseInfo, options: any) {
    if (config && caseInfo) {
      this.stlsArr = [];
      this.message = this.defaultMessage;
      let pathForCheck = path.join(config.pathToWF, caseInfo.caseId);

      let resp = this.stlCheckerService.findFiles(pathForCheck, options.filter);
      if (resp.er) {
        this.message = resp.er;
      }
      this.stlsArr = resp.fileList;
    }
  }
}
