import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Http } from '@angular/http';

import { CustomComment } from '../models/index';

@Injectable()
export class CommentService {
  private readonly commentsPath = 'C:\\AppData\\electro-parser\\comments.json';
  constructor(private http: Http) { }

  getComments(): Observable<any> {
    console.log('in comm serv');
    return this.http.request(this.commentsPath).map(res => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}