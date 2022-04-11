import { Injectable } from '@angular/core';
import {Projects} from "../models";
import {ComponentIssue, Epic, Issue, Widget} from "../class";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects:Projects = {
    wc:{
      name:"Vortex",
      epic:{
        next:1,
        data:{
          0: new Epic("Dashboard",[0,1,2,3,4])
        }
      },
      child:{
        next:5,
        data:{
          0: new ComponentIssue("header",0),
          1: new Widget("button",0),
          2: new Issue("task",0,"task"),
          3: new Issue("story",0,"story"),
          4: new Issue("bug",0,"bug"),
        }
      },
      description:"web constructor",
      pages:{}
    }
  }
  private _active:string = "wc"

  get active(): string{return this._active}
  get project(){return this._projects[this.active]}
  get epic(){return this.project.epic.data}
  get children(){return this.project.child.data}
  child(id:number){return this.project.child.data[id]}
  get name(){return this.project.name}
  get description(){return this.project.description}
  constructor() { }
}
