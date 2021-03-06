import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Epic } from 'src/app/core/class/epic';

import { RoadmapService } from 'src/app/core/service/roadmap.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})

export class EpicComponent implements OnInit,OnChanges {
  @Output("type") typeId = new EventEmitter<string>();
  @Output("child") childId = new EventEmitter<string>();

  @Input() epicName:string = "";
  @Input() link?:string[];
  epic:Epic = new Epic("","component","0");
  isOpen:boolean = false;
  isActive: boolean = false;
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;
  formGroup = new FormGroup({
    child: new FormControl('', Validators.minLength(2)),
  });
  constructor(public roadMap:RoadmapService) { }
  ngOnInit(): void {
    this.epic = this.roadMap.getEpic(this.epicName)
  }
  openChild() {
    this.isOpen = true;
    this.isActive = true;
    setTimeout(()=>{
      this.input?.nativeElement.focus();
    },0)
  }
  createChildSubmit() {
    this.isOpen = true;
    const name = String(this.input?.nativeElement.value);
    this.formGroup.reset();
    const id = this.roadMap.create(this.epic.id,this.epic.type,name);
    this.edit(this.epic.type,id);
  }
  get(child: string[]) {

    return child.map(id => this.roadMap.get(this.epic.type,id));
  }
  prefix(type:string):string{

    let res:string = "unknown";
    switch (type){
      case "widget":
        res="WT"
        break;
      case "component":
        res = "CT"
        break
    }
    return res;
  }

  edit(type:string,id:string) {
    this.typeId.emit(type);
    this.childId.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["link"] && changes["link"].currentValue){
      const res = changes["link"].currentValue;
      setTimeout(()=>{
        this.edit(res[0],res[1]);
      },0)
    }
  }
}
