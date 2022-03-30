import {Injectable} from '@angular/core';
import {Epic} from '../class/epic';
import {WidgetEpic} from '../class/widget';
import {ComponentEpic} from "../class/component";


@Injectable({
  providedIn: 'root'
})
export class RoadmapService {
  private count = {
    epic: 0,
    widget: 0,
    component: 0,
  }
  private Card: {
    epic: { [epic: string]: Epic },
    widget: { [widget: string]: WidgetEpic },
    component: { [widget: string]: ComponentEpic }
  } = {
    epic: {},
    widget: {},
    component: {}
  }

  get epic(): string[] {
    return Object.keys(this.Card.epic)
  }

  getEpic(epic: string): Epic {
    return this.Card.epic[epic]
  }

  getWidget(id: string) {return this.Card.widget[id]}
  getComponent(id: string) {return this.Card.component[id]}


  create(id: string, type: "widget" | "component", name: string):string {
    const childId = String(this.count[type]++);
    switch (type) {
      case 'component':
        this.Card[type][childId] = new ComponentEpic(name,id, childId)
        break;
      case 'widget':
        this.Card[type][childId] = new WidgetEpic(name,id, childId)
        break;
    }
    this.Card["epic"][id].addChild(childId);
    return childId
  }
  createEpic(name: string, type: "widget" | "component"):string {
    const id: string = String(this.count["epic"]);
    this.Card.epic[id] = new Epic(name, type, id);
    this.count["epic"]++;
    return id
  }
  get(type:"epic" | "widget" | "component", id:string){
    return this.Card[type][id];
  }

  constructor() {}
}
