import { Injectable } from '@angular/core';

import { SharedDataService, ConfigService } from './index';

import { CaseInfo } from '../models/index';

import * as fse from 'fs-extra';
import * as path from 'path';

@Injectable()
export class StlCheckerService {

  constructor() { }

  findFiles(dir, filter, fileList = []): any{
    let er;
    if (!fse.existsSync(dir)) {
      console.log("no dir ", dir);
      er = "no such dir: " + dir;
    } else {
      let files = fse.readdirSync(dir);
      files.forEach((file)=> {
        let filename = path.join(dir, file);
        if (fse.statSync(filename).isDirectory()) {
          fileList = this.findFiles(filename, filter, fileList).fileList;
        }
        else if (filter.test(filename)) {
          fileList.push(path.join(dir, file));
        }
      });
    }
    return {er, fileList};
  }
}
