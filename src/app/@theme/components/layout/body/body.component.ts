import {Component, Input, OnInit} from '@angular/core';
import {BodyModel} from "../../../../@core/model/body.model";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  @Input() data:BodyModel = {};
  constructor() { }
  ngOnInit(): void {
  }
}
