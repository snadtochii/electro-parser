import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfigService } from '../../services/index';

import { Config } from '../../models/index';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.css']
})
export class SettingsPopupComponent implements OnInit {
  pathToWF: string;
  pathToSF: string;
  pathToMimics: string;
  isDoubleOpen: boolean;

  config: any = {};

  constructor(private configService: ConfigService) {

  }

  ngOnInit() {
    this.configService.getConfig().subscribe(res => {
      this.config = res;
    });
  }
  onConfigChange(form: NgForm) {
    console.log(form.value);
    this.configService.setConfig(form.value);
  }
}