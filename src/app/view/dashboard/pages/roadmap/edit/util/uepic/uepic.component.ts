import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Epic} from "../../../../../../../core/class/epic";
import {RoadmapService} from "../../../../../../../core/service/roadmap.service";

@Component({
  selector: 'app-uepic',
  templateUrl: './uepic.component.html',
  styleUrls: ['./uepic.component.scss']
})
export class UepicComponent implements OnInit {
  @Input() epic:Epic = new Epic("",'widget',"");
  @Output() link = new EventEmitter<string[]>();
  changeType!: boolean;
  changeTypeToggle:any;
  constructor(private roadmap:RoadmapService) { }
  ngOnInit(): void {
  }
  sendLink($event:string[]) {
    this.link.emit($event);
  }
  changeEmitter(event: any): void{
    if (event == this.changeTypeToggle){
      this.changeTypeToggle = "_";
      event = "_";
    }
    this.changeType = event;
    this.changeTypeToggle = event;
  }
}
