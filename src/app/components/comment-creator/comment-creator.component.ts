import { Component, OnInit } from '@angular/core';

import { CommentService } from '../../services/index';
import { CustomComment, defaultComments } from '../../models/index';

import { clipboard } from 'electron';

@Component({
  selector: 'app-comment-creator',
  templateUrl: './comment-creator.component.html',
  styleUrls: ['./comment-creator.component.css']
})
export class CommentCreatorComponent implements OnInit {

  commentMap: boolean[] = [];                                                         //temporary. Until find correct solution
  commentsFullList: any[];
  comments: any[] = [];
  formedComment: string;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(
      (res) => {
        this.commentsFullList = res.map((el, i, arr) => {
          this.commentMap.push(false);                                                  //temp
          return el
        });
      },
      (err) => {
        this.commentsFullList = defaultComments;
        this.commentsFullList.forEach((el, i, arr) => { this.commentMap.push(false) })  //temp
      });
  }
  toggleComment(event: any, id: number): void {
    if (event.target.checked) {
      this.comments.push(this.commentsFullList[id]);
      this.commentMap[id] = true;                                                       //temp
    } else {
      this.commentMap[id] = false;                                                      //temp
      this.comments = this.comments.filter((el, i, arr) => {
        return (el.id != id);
      });
    }
    this.formedComment = this.comments.map((el, i, arr) => { return el.value }).join('\n');
  }
  copyComment(text: string): void {
    clipboard.writeText(text);
  }
  resetAll() {
    this.formedComment = "";
    this.comments = [];
    this.commentMap = [];                                                               //temp
    this.commentsFullList.forEach((el, i, arr) => { this.commentMap.push(false) })      //temp
  }
}