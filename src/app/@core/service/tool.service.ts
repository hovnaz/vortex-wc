import { Injectable } from '@angular/core';
import { headerTool } from '../model/header-tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  headerTool:headerTool = {
    toggleSidebar:{
      toggle:"sidebar",
      logo:"bx bx-sidebar",
      hotkey:["f1"],
      comment:"toggle sidebar",
    }
  }
  constructor() { }
}