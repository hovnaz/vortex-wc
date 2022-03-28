import {Component, Input, OnInit} from '@angular/core';
import {Epic} from "../../../../../../../core/class/epic";
import {RoadmapService} from "../../../../../../../core/service/roadmap.service";

@Component({
  selector: 'app-uepic',
  templateUrl: './uepic.component.html',
  styleUrls: ['./uepic.component.scss']
})
export class UepicComponent implements OnInit {
  @Input() epic:Epic = new Epic("","widget","");
  constructor(private roadmap:RoadmapService) { }

  ngOnInit(): void {
  }

}
