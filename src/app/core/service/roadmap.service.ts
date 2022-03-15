import { Injectable } from '@angular/core';
import { Epic } from '../class/epic';
import { WidgetEpic } from '../class/widget';
import {ComponentEpic} from "../class/component";
import {AbstractControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class RoadmapService {
  private count = {
    epic:0,
    widget:0,
    component:0,
  }
  private epicCard:{[epic:string]:Epic} = {
    // "1":new Epic("pages","component","1")
  }

  private widgetCard:{[widget:string]:WidgetEpic} = {
    // "1": new WidgetEpic("button","1")
  }
  private ComponentCard:{[widget:string]:ComponentEpic} = {
    // "1": new ComponentEpic("header","1")
  }

  get epic():string[]{return Object.keys(this.epicCard)}

  getEpic(epic:string):Epic{return this.epicCard[epic]}
  getWidget(id:string){
    return this.widgetCard[id]
  }
  getComponent(id:string){
    return this.ComponentCard[id]
  }


  createEpic(name: string, type: "widget" | "component"){
    const id:string = String(this.count["epic"])
    this.epicCard[id] = new Epic(name,type,id)
    this.count["epic"]++;
  }



  constructor() {
    // this.epicCard["1"].addChild("1")
   }
}
