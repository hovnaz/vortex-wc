import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { Epic } from '../class/epic';
import { WidgetEpic } from '../class/widget';


@Injectable({
  providedIn: 'root'
})
export class RoadmapService {
  private countEpic:number = 0;
  private epicCard:{[epic:string]:Epic} = {
    "1":new Epic("Dashboard","component")
  }
  
  private widgetCard:{[widget:string]:WidgetEpic} = {
    "1": new WidgetEpic("button")
  }


  get epic():string[]{return Object.keys(this.epicCard)}

  getEpic(epic:string):Epic{return this.epicCard[epic]}
  getWidget(id:string){return this.widgetCard[id]}
  getComponent(id:string){return this.widgetCard[id]}

  constructor() {
    this.epicCard["1"].addChild("widget-1")
   }
}
