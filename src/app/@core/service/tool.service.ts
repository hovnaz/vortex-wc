import { Injectable } from '@angular/core';
import { headerTool } from '../model/header-tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private headerTool:headerTool = {
    left:[
      {
        name:"cursorTool",
        logo:"bx bx-navigation bx-flip-horizontal",
        route:["design","cursor-tool"],
        hotkey:["1"],
        comment:"cursor tool",
      }
    ]
  }
  get getHeaderTools() {return this.headerTool}
  constructor() { }
}
