import { Component, OnInit } from '@angular/core';

import { Case, CaseInfo, PatientsInfo } from '../../models/index';
import { SharedDataService, ConfigService } from '../../services/index';

import { shell } from 'electron';
import * as fs from 'fs-extra';

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
  pathToWF: string;
  pathToSF: string;
  currentCase: CaseInfo;

  constructor(private sharedDataService: SharedDataService, private configService: ConfigService) {
    this.sharedDataService.cs$.subscribe(data => {
      this.currentCase = data.caseInfo;
    });
    this.currentCase = CASEMOCK.caseInfo;
  }

  ngOnInit() {
    this.configService.getConfig().subscribe(res => {
      this.pathToWF = res.pathToWF;
      this.pathToSF = res.pathToSorce;
    });
  }

  OnGenerate() {
    console.log(fs.copy(`${this.pathToSF}\\${this.currentCase.surgeryType}_History.docx`,
      `${this.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}_History.docx`,
      (er) => {
        if (er) {
          console.log(er);
        } else {
          console.log('success');
        }
      }));

      shell.openItem(`${this.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}_History.docx`);
      if (this.openMimics) {
        console.log(shell.openItem('C:\\Program Files\\Materialise\\Mimics Medical 19.0\\MimicsMedical.exe'));
      }
  }
  OnChange() {
    
  }
}
