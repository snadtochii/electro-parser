import { Component, OnInit, ApplicationRef } from '@angular/core';
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
  noError: any = { isFail: false, fileError: '' };
  error: any = this.noError;

  constructor(private applicationRef: ApplicationRef, private sharedDataService: SharedDataService, private filesControlService: FilesControlService, private configService: ConfigService) { }

  ngOnInit() {
    this.sharedDataService.cs$.subscribe(data => {
      this.currentCase = data.caseInfo;
      this.error = this.noError;
    });
    this.configService.config$.subscribe(res => {
      this.config = res;
      this.error = this.noError;
    });
  }
  onGenerate() {
    let options = {
      config: this.config, currentCase: this.currentCase, openMimics: this.openMimics
    }
    this.error = this.noError;
    this.filesControlService.generateFiles(options, (err) => {
      if (err) {
        this.error = { isFail: true, fileError: err }
        this.applicationRef.tick()
      }
    });
    clipboard.writeText(this.currentCase.caseId);
  }
  onChange() {

  }
}