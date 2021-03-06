import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { DataInputComponent } from './components/data-input/data-input.component';
import { InfoComponent } from './components/info/info.component';
import { ControlsPanelComponent } from './components/controls-panel/controls-panel.component';
import { OutputComponent } from './components/output/output.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsPopupComponent } from './components/settings-popup/settings-popup.component';
import { LatestDoneComponent } from './components/latest-done/latest-done.component';
import { CopyPathComponent } from './components/copy-path/copy-path.component';
import { CommentCreatorComponent } from './components/comment-creator/comment-creator.component';
import { StlCheckerComponent } from './components/stl-checker/stl-checker.component';
import { FileGenComponent } from './components/file-gen/file-gen.component';

import { SharedDataService } from './services/shared-data.service';
import { ConfigService } from './services/config.service';
import { FilesControlService } from './services/files-control.service';
import { StlCheckerService } from './services/stl-checker.service';
import { PathCheckerService } from './services/path-checker.service';
import { CommentService } from './services/comment.service';




@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    InfoComponent,
    ControlsPanelComponent,
    OutputComponent,
    DashboardComponent,
    SettingsPopupComponent,
    LatestDoneComponent,
    CopyPathComponent,
    CommentCreatorComponent,
    StlCheckerComponent,
    FileGenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [SharedDataService, ConfigService, FilesControlService, StlCheckerService, PathCheckerService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
