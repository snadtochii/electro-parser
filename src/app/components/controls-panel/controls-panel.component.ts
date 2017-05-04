import { Component, OnInit } from '@angular/core';

import { Case, CaseInfo, PatientsInfo, Config } from '../../models/index';
import { SharedDataService, ConfigService, FilesControlService } from '../../services/index';

//dev
import { CASEMOCK } from '../../models/case-mock';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.css']
})
export class ControlsPanelComponent implements OnInit {

  isDropdownOpen: boolean = false;
  openMimics: boolean = true;
  config: any = {};
  currentCase: CaseInfo //= CASEMOCK.caseInfo;

  constructor(private sharedDataService: SharedDataService, private configService: ConfigService, private filesControlService: FilesControlService) {
    this.sharedDataService.cs$.subscribe(data => {
      this.currentCase = data.caseInfo;
    });
  }

  ngOnInit() {
    this.configService.getConfig().subscribe(res => {
      console.log(res)
      this.config = res;
    });
  }

  onGenerate() {
    this.filesControlService.generateFiles(this.currentCase, this.openMimics);
    
  }
  onChange() {

  }
}
