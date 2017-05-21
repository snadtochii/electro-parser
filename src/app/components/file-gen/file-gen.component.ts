import { Component, OnInit } from '@angular/core';
import { Case, CaseInfo, PatientsInfo, Config } from '../../models/index';

import { SharedDataService, ConfigService, FilesControlService } from '../../services/index';

import { clipboard } from 'electron';

@Component({
  selector: 'app-file-gen',
  templateUrl: './file-gen.component.html',
  styleUrls: ['./file-gen.component.css']
})
export class FileGenComponent implements OnInit {

  isDropdownOpen: boolean = false;
  openMimics: boolean = true;
  currentCase: CaseInfo;
  config: Config;

  constructor(private sharedDataService: SharedDataService, private filesControlService: FilesControlService, private configService: ConfigService) { }

  ngOnInit() {
    this.sharedDataService.cs$.subscribe(data => {
      this.currentCase = data.caseInfo;
    });
    this.configService.config$.subscribe(res => {
      this.config = res;
    });
  }
  onGenerate() {
    let options = {
      config: this.config, currentCase: this.currentCase, openMimics: this.openMimics
    }
    this.filesControlService.generateFiles(options);
    clipboard.writeText(this.currentCase.caseId);
  }
  onChange() {

  }
}
