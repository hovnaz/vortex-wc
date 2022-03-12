import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/class/card';

import { RoadmapService } from 'src/app/core/service/roadmap.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {
  @Input() epicName:string = "";
  epic?:Card[];
  isOpen:boolean = false;
  constructor(private roadMap:RoadmapService) { }

  ngOnInit(): void {
    this.epic = this.roadMap.oneEpic(this.epicName);
  }
}
