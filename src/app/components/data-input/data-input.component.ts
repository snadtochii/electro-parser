import { Component, OnInit, Output } from '@angular/core';

import { Case, Config } from '../../models/index';
import { SharedDataService, ConfigService } from '../../services/index';

import { StlCheckerComponent } from '../index';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  config: Config;

  constructor(private sharedDataService: SharedDataService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.config$.subscribe(res => {
      this.config = res;
    });
  }

  onChange(textToParse) {
    let date = new Date();
    let additionalData = {
      engineer: this.config.engineer,
      uploadDate: ((date.getDate() < 10) ? ("0" + date.getDate()) : date.getDate()).toString()
      + "/" + (((date.getMonth() + 1) < 10) ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)).toString()
    }
    this.sharedDataService.parseData(textToParse, additionalData);
  }
}