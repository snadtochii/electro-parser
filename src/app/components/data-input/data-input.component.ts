import { Component, OnInit, Output } from '@angular/core';

import { Case } from '../../models/index';
import { SharedDataService } from '../../services/index';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit() {

  }

  onChange(textToParse) {
    let date = new Date();
    let additionalData = {
      engineer: 'Sergey N.',
      uploadDate: ((date.getDate() < 10) ? ("0" + date.getDate()) : date.getDate()).toString()
      + "/" + (((date.getMonth() + 1) < 10) ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)).toString()
    }
    this.sharedDataService.parseData(textToParse, additionalData);
  }
}