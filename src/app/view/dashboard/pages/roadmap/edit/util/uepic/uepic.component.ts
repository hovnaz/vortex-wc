import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Epic} from "../../../../../../../core/class/epic";
import {RoadmapService} from "../../../../../../../core/service/roadmap.service";

@Component({
  selector: 'app-uepic',
  templateUrl: './uepic.component.html',
  styleUrls: ['./uepic.component.scss']
})
export class UepicComponent implements OnInit {
  @Input() epic:Epic = new Epic("","widget","");
  @Output() link = new EventEmitter<string[]>()

  constructor(private roadmap:RoadmapService) { }

  ngOnInit(): void {
  }

  sendLink($event:string[]) {
    this.link.emit($event);
  }

}
