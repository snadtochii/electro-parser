import { Component, OnInit } from '@angular/core';

import { clipboard } from 'electron';

import { CaseInfo } from '../../models/index';
import { SharedDataService, ConfigService } from '../../services/index';

import * as path from 'path';

@Component({
    selector: 'app-copy-path',
    templateUrl: './copy-path.component.html',
    styleUrls: ['./copy-path.component.css']
})
export class CopyPathComponent implements OnInit {
    private pathDef: string;
    private pathFib: string;
    private pathHip: string;
    private pathScap: string;
    config: any;
    currentCase: CaseInfo;

    constructor(private sharedDataService: SharedDataService, private configService: ConfigService) { }

    ngOnInit() {
        this.configService.config$.subscribe(res => {
            this.config = res;
            this.formPath();
        });
        this.sharedDataService.cs$.subscribe(data => {
            this.currentCase = data.caseInfo;
            this.formPath();
        });
    }
    copyPath(path: string): void {
        clipboard.writeText(path);
    }
    formPath() {
        if (this.config && this.currentCase) {
            this.pathDef = path.join(this.config.pathToWF, this.currentCase.caseId, this.currentCase.caseId + '.mcs');
            this.pathFib = path.join(this.config.pathToWF, this.currentCase.caseId, this.currentCase.caseId + '_fibula.mcs');
            this.pathHip = path.join(this.config.pathToWF, this.currentCase.caseId, this.currentCase.caseId + '_hip.mcs');
            this.pathScap = path.join(this.config.pathToWF, this.currentCase.caseId, this.currentCase.caseId + '_scapula.mcs');
        }
    }
}
