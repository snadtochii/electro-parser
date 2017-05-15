import { Component, OnInit } from '@angular/core';

import { SharedDataService, ConfigService, StlCheckerService } from '../../services/index';

import * as fse from 'fs-extra';
import * as watch from 'node-watch';
import * as path from 'path';


@Component({
  selector: 'app-stl-checker',
  templateUrl: './stl-checker.component.html',
  styleUrls: ['./stl-checker.component.css']
})
export class StlCheckerComponent implements OnInit {

  stlsArr: string[] = [];
  path: string;
  config: any;
  message: string;
  options: any = {
    filter: /\.stl/,
  }

  constructor(private sharedDataService: SharedDataService, private stlCheckerService: StlCheckerService, private configService: ConfigService) {
    this.sharedDataService.cs$.subscribe(data => {
      this.path = `${this.config.pathToWF}${data.caseInfo.caseId}\\`;
      this.stlsArr = [];
      this.stlCheckerService.findFiles(this.path, this.options.filter, (er, filename) => {
        if (er) {
          this.message = er;
          return;
        }
        this.stlsArr.push(filename);
      });
    });
  }

  ngOnInit() {
    this.configService.getConfig().subscribe(res => {
      this.config = res;
    });
  }

  check() {
    this.stlsArr = [];
    this.stlCheckerService.findFiles(this.path, this.options.filter, (er, filename) => {
      if (er) {
        this.message = er;
        return;
      }
      this.stlsArr.push(filename);
    });
  }
}
