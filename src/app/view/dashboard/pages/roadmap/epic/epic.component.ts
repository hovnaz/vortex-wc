import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Epic } from 'src/app/core/class/epic';
import { WidgetEpic } from 'src/app/core/class/widget';

import { RoadmapService } from 'src/app/core/service/roadmap.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  isActive: boolean = false;

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  formGroup = new FormGroup({
    child: new FormControl('', Validators.minLength(2)),
  });

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
  addChild() {
    this.isOpen = true;
    this.isActive = true;

    setTimeout(()=>{
      this.input?.nativeElement.focus();
    },0)

    const name = String(this.formGroup.get("child"));




    console.log(name);
  }

  createChildSubmit() {

  }
}
