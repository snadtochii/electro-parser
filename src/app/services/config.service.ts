import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

import { Config } from '../models/index';

import * as fs from 'fs-extra';

@Injectable()
export class ConfigService {

    constructor(private http: Http) { }

    getConfig(): Observable<any> {
        return this.http.request('D:\\duducaon\\GIT\\parser - super new\\electro-parser\\release-builds\\Electro-Parser-win32-ia32\\config.json').map(res => res.json());
        //return fs.readJson('./config.json') //need to think about
    }
    setConfig(config: Config) {
        console.log(config);
        fs.writeJson('D:\\duducaon\\GIT\\parser - super new\\electro-parser\\release-builds\\Electro-Parser-win32-ia32\\config.json', config, er => {
            if (er) {
                console.log(er);
            } else {
                console.log('success');
            }
        })
    }
}
