import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { RoadmapService } from 'src/app/core/service/roadmap.service';

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
    this.roadmap.createEpic(String(name?.value),"component")
    this.epic = this.roadmap.epic;
    this.formGroup.reset();
  }
}
