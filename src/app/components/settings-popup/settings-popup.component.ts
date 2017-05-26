import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService, PathCheckerService } from '../../services/index';

import { Config } from '../../models/index';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.css']
})
export class SettingsPopupComponent implements OnInit {

  config: Config = {
    pathToWF: "",
    pathToSF: "",
    pathToMimics: "",
    isDoubleOpen: true,
    engineer: ""
  };
  isMimicsPathValid: boolean = true;
  isSFValid: boolean = true;
  isWFValid: boolean = true;

  constructor(private applicationRef: ApplicationRef, private configService: ConfigService, private pathCheckerService: PathCheckerService) { }

  ngOnInit() {
    this.configService.config$.subscribe((res) => {
      this.config = res;
    });
  }
  onConfigChange(form: NgForm) {
    this.configService.setConfig(form.value);
  }
  checkPath(path: string) {
    return this.pathCheckerService.pathExist(path);
  }
  initValidators(pathToWF: string, pathToSF: string, pathToMimics: string) {
    this.isWFValid = this.checkPath(pathToWF);
    this.isSFValid = this.checkPath(pathToSF);
    this.isMimicsPathValid = this.checkPath(pathToMimics);
  }
}