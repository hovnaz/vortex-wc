import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../../../../../core/services";
import {Card, ComponentIssue, Issue, Widget} from "../../../../../../core/class";

type issueType<T extends Card> = T;

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() id!:number;
  issue:any;
  projectId?:string;
  constructor(private project:ProjectService ) { }
  ngOnInit(): void {
    this.issue = this.project.child(this.id);
    this.projectId = (this.project.active);
  }
}
