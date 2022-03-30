import {Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { RoadmapService } from 'src/app/core/service/roadmap.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  epic:string[] = [];
  isFocused = false;
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  formGroup = new FormGroup({
    epic: new FormControl('', Validators.minLength(2)),
  });
  isActive: boolean = false;
  type?: string;
  child?: string;
  openEdit: boolean = true;
  link?:string[];
  constructor(
    private roadmap:RoadmapService,
  ) {

    this.epic = this.roadmap.epic;
  }
  ngOnInit(): void {
  }
  openEpicAdd(){
    this.isActive = true;
    setTimeout(() => {
      this.input?.nativeElement.focus();
    }, 0);
  }
  createEpicSubmit(){
    const name = this.formGroup.get("epic");
    const id = this.roadmap.createEpic(String(name?.value),"widget")
    this.epic = this.roadmap.epic;
    this.formGroup.reset();
    this.sendLink(["epic",id]);
  }
  editType($event: string) {
    this.type = $event;
  }
  editChild($event: string) {
    this.child = $event;
    this.openEdit = !this.openEdit;
  }
  sendLink($event: string[]) {
    this.link = $event;
  }
}
