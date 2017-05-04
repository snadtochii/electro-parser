import { Component, OnInit } from '@angular/core';

import { Case } from '../../models/index';
import { SharedDataService } from '../../services/index';

///development
import {CASEMOCK} from '../../models/case-mock';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data: any;
  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.cs$.subscribe((data)=>{
      this.data = data.patientsInfo;
    })
    
    ///development
    //this.data = CASEMOCK.patientsInfo;
   }

  ngOnInit() {
  }

}
