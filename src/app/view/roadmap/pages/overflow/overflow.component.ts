import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../../core/services";

@Component({
  selector: 'app-overflow',
  templateUrl: './overflow.component.html',
  styleUrls: ['./overflow.component.scss']
})
export class OverflowComponent implements OnInit {
  projectEpicData:any;
  constructor(private project:ProjectService) { }

  ngOnInit(): void {
    this.projectEpicData = Object.values(this.project.epic);
  }

}
