import { Injectable } from '@angular/core';

import { SharedDataService, ConfigService } from './index';

import * as fse from 'fs-extra';
import * as watch from 'node-watch';
import * as path from 'path';

@Injectable()
export class StlCheckerService {

  constructor(private sharedDataService: SharedDataService, private configService: ConfigService) { }

  findFiles(startPath, filter, callback): void {
    let er;

    if (!fse.existsSync(startPath)) {
      console.log("no dir ", startPath);
      er = "no such dir: " + startPath;
      callback(er, null)
      return;
    }

    let files = fse.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
      let filename = path.join(startPath, files[i]);
      let stat = fse.lstatSync(filename);
      if (stat.isDirectory()) {
        this.findFiles(filename, filter, callback);
      }
      else if (filter.test(filename)) {
        callback(er, filename);
      }
    };
  };
}
