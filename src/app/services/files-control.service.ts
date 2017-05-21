import { Injectable } from '@angular/core';

import { CaseInfo, Config } from '../models/index';
import { ConfigService } from '../services/index'

import { shell } from 'electron';
import * as fse from 'fs-extra';
import * as path from 'path';


@Injectable()
export class FilesControlService {

  constructor(private configService: ConfigService) { }

  private lastWordPattern = /(\w+)$/;

  generateFiles(options: any) {
    let pathToSorceFile = path.join(options.config.pathToWF, this.lastWordPattern.exec(options.currentCase.surgeryType)[0] + '_History.docx');
    let pathToWorkingFile = path.join(path.join(options.config.pathToWF, options.currentCase.caseId, options.currentCase.caseId + '_History.docx'));
    
    fse.access(pathToWorkingFile, er => {
      if (er) {
        try {
          fse.copySync(pathToSorceFile, pathToWorkingFile);
        } catch (er) {
          console.log(er);
        }
      }
      this.openFiles(options, pathToWorkingFile);
    });
  }

  openFiles(options: any, pathToWorkingFile: string) {
    shell.openItem(pathToWorkingFile);
    if (options.openMimics) {
      if (this.lastWordPattern.exec(options.currentCase.surgeryType.toLowerCase())[0] == 'reconstruction' && options.config.isDoubleOpen) {
        shell.openItem(options.config.pathToMimics);
      }
      shell.openItem(options.config.pathToMimics);
    }
  }
}
