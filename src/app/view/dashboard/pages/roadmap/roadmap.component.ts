import { Component, OnInit } from '@angular/core';
import { Epic } from 'src/app/core/model/epic.model';
import { RoadmapService } from 'src/app/core/service/roadmap.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  epic:string[];
  constructor(private roadmap:RoadmapService) {
    this.epic = roadmap.epic;
  }
  ngOnInit(): void {
    
  }

}
