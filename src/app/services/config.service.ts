import { Injectable, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http } from '@angular/http';

import { Config } from '../models/index';

import * as fs from 'fs-extra';

@Injectable()
export class ConfigService {
    private readonly configPath = 'C:\\AppData\\electro-parser\\config.json';
    private config = new Subject<Config>();
    config$ = this.config.asObservable();

    constructor(private http: Http) { }

    getConfig(): Observable<any> {
        console.log('in config serv');
        return this.http.request(this.configPath).map(res => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
    setConfig(config: Config) {
        this.config.next(config);
        fs.writeJson(this.configPath, config, er => {
            if (er) {
                console.log(er);
            } else {
                this.config.next(config);
                console.log('success');
            }
        });
    }
    initGonfig() {
        this.getConfig().subscribe(
            (res) => {
                this.config.next(res);
            });
            //,
            // (err) => {
            //     this.config.next(this.defaultConfig);
            // });
    }
}
