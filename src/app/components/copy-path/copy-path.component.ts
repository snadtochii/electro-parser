import { Component, OnInit } from '@angular/core';

import { clipboard } from 'electron';

import { CaseInfo } from '../../models/index';
import { SharedDataService, ConfigService } from '../../services/index';

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
    config: any = {};
    currentCase: CaseInfo;

    constructor(private sharedDataService: SharedDataService, private configService: ConfigService) {
        this.sharedDataService.cs$.subscribe(data => {
            this.currentCase = data.caseInfo;
            this.pathDef = `${this.config.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}.mcs`;
            this.pathFib = `${this.config.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}_fibula.mcs`;
            this.pathHip = `${this.config.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}_hip.mcs`;
            this.pathScap = `${this.config.pathToWF}${this.currentCase.caseId}\\${this.currentCase.caseId}_scapula.mcs`;
        });
    }

    ngOnInit() {
        this.configService.getConfig().subscribe(res => {
            this.config = res;
        });
    }
    copyPath(path: string): void {
        clipboard.writeText(path);
    }
}
