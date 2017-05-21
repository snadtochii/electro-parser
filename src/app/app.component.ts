import { Component, OnInit } from '@angular/core';

import { ConfigService, CommentService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private configService: ConfigService, private commentService: CommentService){ }

  ngOnInit(){
    this.configService.initGonfig();
  }
}
