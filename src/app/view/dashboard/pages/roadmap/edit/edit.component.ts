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
  isOpen: boolean = false;
  @Input() type:any;
  @Input() child:any;

  formName = new FormGroup({
    name: new FormControl(""),
  });
  formDesc = new FormGroup({
    description: new FormControl(""),
  });

  card?:Epic | WidgetEpic |ComponentEpic;
  constructor(private roadmap:RoadmapService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] || changes['child']) {
      this.isOpen = true;
      try{
        this.card = this.roadmap.get(this.type,this.child);
        this.formName.get("name")?.setValue(this.card.name);
        this.formDesc.get("description")?.setValue(this.card.description);
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
  
  setWorkflow(flag:"backlog" | "process" | "done"){
    this.card?.setWorkflow(flag)
  }
  setDesk(){
    const value = this.formDesc.get("description")?.value;
    this.card?.setDescription(value);
  }
}