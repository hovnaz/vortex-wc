import { Component, OnInit } from '@angular/core';
import {ToolService} from "../../../../@core/service/tool.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  HeaderTools = this.toolService.getHeaderTools;
  constructor(private toolService:ToolService,private router: Router) { }

  ngOnInit(): void {
    this.HeaderTools = this.toolService.getHeaderTools;
  }
}
