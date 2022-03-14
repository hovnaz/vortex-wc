import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/class/card';
import { Epic } from 'src/app/core/class/epic';
import { WidgetEpic } from 'src/app/core/class/widget';

import { RoadmapService } from 'src/app/core/service/roadmap.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {
  @Input() epicName:string = "";
  epic?:Epic;
  child:WidgetEpic[] = [];
  isOpen:boolean = false;
  constructor(private roadMap:RoadmapService) { }

  ngOnInit(): void {
    this.epic = this.roadMap.getEpic(this.epicName);
    switch(this.epic.type){
      case "widget":
        this.child = this.epic.child.map(x => this.roadMap.getWidget(x));
        break;
      case "component":
        this.child = this.epic.child.map(x => this.roadMap.getComponent(x));
        break;
    }
  }
}
