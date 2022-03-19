import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentEpic } from 'src/app/core/class/component';
import { Epic } from 'src/app/core/class/epic';
import { WidgetEpic } from 'src/app/core/class/widget';
import { RoadmapService } from 'src/app/core/service/roadmap.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit,OnChanges {
  isOpen: boolean = true;
  @Input() type:any;
  @Input("child") id:any;

  formName = new FormGroup({
    name: new FormControl(''),
  });



  card?:Epic | WidgetEpic |ComponentEpic;
  constructor(private roadmap:RoadmapService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['child'] || changes['id']) {
      try{
        console.log(this.card);
        this.card = this.roadmap.get(this.type,this.id);
      }
      catch(error){}
    }
  }
  
  ngOnInit(): void {
  }

  setName(){
    let name = this.formName.get("name");
    if (name?.valid && this.card) {
      this.card.sname(name.value);
    }
  }
}