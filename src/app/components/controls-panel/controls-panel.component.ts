import { Component, OnInit } from '@angular/core';

import { Case, CaseInfo, PatientsInfo, Config } from '../../models/index';
import { SharedDataService, ConfigService, FilesControlService } from '../../services/index';

import { clipboard } from 'electron';
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
  currentCase: CaseInfo //= CASEMOCK.caseInfo;

  constructor(private sharedDataService: SharedDataService, private filesControlService: FilesControlService) {
    this.sharedDataService.cs$.subscribe(data => {
      this.currentCase = data.caseInfo;
    });
  }

  ngOnInit() {
  }

  onGenerate() {
    this.filesControlService.generateFiles(this.currentCase, this.openMimics);
    clipboard.writeText(this.currentCase.caseId);
  }
  onChange() {

  }
}
