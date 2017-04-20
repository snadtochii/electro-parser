import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataInputComponent } from './components/data-input/data-input.component';
import { InfoComponent } from './components/info/info.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OutputComponent } from './components/output/output.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ClipboardModule } from 'ngx-clipboard';

import { SharedDataService } from './services/shared-data.service';
import { ConfigService } from './services/config.service';
import { SettingsPopupComponent } from './components/settings-popup/settings-popup.component';
import { LatestDoneComponent } from './components/latest-done/latest-done.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    InfoComponent,
    ControlsPanelComponent,
    SettingsComponent,
    OutputComponent,
    DashboardComponent,
    SettingsPopupComponent,
    LatestDoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [SharedDataService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
