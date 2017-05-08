import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

import { Config } from '../models/index';

import * as fs from 'fs-extra';

@Injectable()
export class ConfigService {
    private readonly configPath = 'C:\\AppData\\electro-parser\\config.json';

    constructor(private http: Http) { }

    getConfig(): Observable<any> {
        return this.http.request(this.configPath).map(res => res.json());
        //return fs.readJsonSync('D:\\duducaon\\GIT\\parser - super new\\electro-parser\\public\\config.json'); //need to think about
    }
    setConfig(config: Config) {
        console.log(config);
        fs.writeJson(this.configPath, config, er => {
            if (er) {
                console.log(er);
            } else {
                console.log('success');
            }
        })
    }
}
