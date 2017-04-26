import { Injectable, } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Case, CaseInfo, PatientsInfo, Parser } from '../models/index';

///development
import {CASESMOCK} from '../models/case-mock';

@Injectable()
export class SharedDataService {
  caseInfo: CaseInfo;
  patientsInfo: PatientsInfo;
  newCase: Case;
  private _latestCases: Case[] = CASESMOCK;//[];
  private cs = new Subject<Case>();

  cs$ = this.cs.asObservable();
  constructor() { }

  parseData(textToParse: string, additionalData: any) {
    let parser: Parser = new Parser();
    let caseInfoParsed = parser.parseCaseInfo(textToParse, additionalData);
    let patientsInfoParsed = parser.parsePatientsInfo(textToParse);

    if (!caseInfoParsed && !patientsInfoParsed) return;

    this.caseInfo = new CaseInfo(caseInfoParsed['Case ID'], caseInfoParsed['Surgery Type'], caseInfoParsed['Surgeon Name'], caseInfoParsed['Surgery Date'], additionalData.engineer, additionalData.uploadDate)
    this.patientsInfo = new PatientsInfo(patientsInfoParsed['First Name'], patientsInfoParsed['Middle Name'], patientsInfoParsed['Last Name'], patientsInfoParsed['Gender'], patientsInfoParsed['Birth Date'])
    this.newCase = new Case(this.caseInfo, this.patientsInfo);
    this.cs.next(this.newCase);

    this._formLatestCases(this.newCase);
  }

  getLatestCases(): Observable<Case[]> {
    return Observable.of(this._latestCases);
  }

  private _formLatestCases(currentCase: Case) {
    if (this._latestCases && this._latestCases.length >= 10) {
      this._latestCases.pop();
    }
    this._latestCases.unshift(currentCase);
  }
}
