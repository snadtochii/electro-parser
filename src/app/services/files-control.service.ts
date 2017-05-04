import { Injectable } from '@angular/core';

import { CaseInfo, Config } from '../models/index';
import { ConfigService } from '../services/index'

import { shell } from 'electron';
import * as fs from 'fs-extra';

@Injectable()
export class FilesControlService {

  constructor(private configService: ConfigService) { }

  config: any;
  private lastWordPattern = /(\w+)$/;

  generateFiles(currentCase: CaseInfo, openMimics: boolean) {
    this.configService.getConfig().subscribe(res => {
      this.config = res;

      fs.access(`${this.config.pathToWF}${currentCase.caseId}\\${currentCase.caseId}_History.docx`, er => {
        if (er) {
          try {
            fs.copySync(`${this.config.pathToSF}\\${this.lastWordPattern.exec(currentCase.surgeryType)[0]}_History.docx`,
              `${this.config.pathToWF}${currentCase.caseId}\\${currentCase.caseId}_History.docx`);
          } catch (er) {
            console.log(er);
          }
        }
        this.openFiles(currentCase, openMimics);
      });
    });
  }
  
  openFiles(currentCase: CaseInfo, openMimics: boolean) {
    shell.openItem(`${this.config.pathToWF}${currentCase.caseId}\\${currentCase.caseId}_History.docx`);
    if (openMimics) {

      if (this.lastWordPattern.exec(currentCase.surgeryType.toLowerCase())[0] == 'reconstruction' && this.config.isDoubleOpen) {
        shell.openItem(this.config.pathToMimics);
      }
      shell.openItem(this.config.pathToMimics);
    }
  }
}
