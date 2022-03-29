import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Epic} from "../../../../../../../../core/class/epic";
import {RoadmapService} from "../../../../../../../../core/service/roadmap.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit,OnChanges {
  @Input() epic?:Epic;
  done?:number = 0;
  process:number = 0;
  backlog:number = 1;
  percentDone:number = 0;
  doneRadius:boolean = false;
  init:any;
  constructor(private roadmap:RoadmapService) { }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.epic)return;
    this.done = 0;
    this.process = 0;
    this.percentDone = 0;
    this.backlog = this.epic.child.length;
    for (const id of this.epic.child) {
      const item = this.roadmap.get(this.epic.type,id);
      switch (item.workflow){
        case "process":
          this.process++;
          this.backlog--;
          break;
        case "done":
          this.done++;
          this.backlog--;
          break
      }
    }
    this.doneRadius = !this.process;
    this.percentDone = Math.floor(this.done / this.epic.child.length*100);
    this.percentDone = this.percentDone?this.percentDone:0
  }
}
