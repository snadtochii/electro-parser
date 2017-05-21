import { Injectable } from '@angular/core';

import * as fse from 'fs-extra';

@Injectable()
export class PathCheckerService {

  constructor() { }

  pathExist(path: string): any {
    try {
      fse.statSync(path);
      return true;
    }
    catch (err) {
      return false;
    }
  }
}