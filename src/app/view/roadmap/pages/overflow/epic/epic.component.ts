import {Component, Input, OnInit} from '@angular/core';
import {Epic} from "../../../../../core/class";

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {
  @Input() epic!:Epic;
  child:Array<number> = []
  isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.child = [...this.epic.getChild()];
  }

}
