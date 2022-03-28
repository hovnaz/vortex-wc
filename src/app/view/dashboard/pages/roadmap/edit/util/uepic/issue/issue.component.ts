import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RoadmapService} from "../../../../../../../../core/service/roadmap.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() id: any;
  @Input() type: "widget" | "component" = "widget";
  issue: any;
  isEditName: boolean = false;
  formName = new FormGroup({
    name: new FormControl(""),
  });
  nameTmp?:string;
  @ViewChild('name') nameInput?: ElementRef<HTMLInputElement>;

  constructor(private roadmap: RoadmapService) {
  }

  ngOnInit(): void {
    this.issue = this.roadmap.get(this.type, this.id);
    this.nameTmp = this.issue.name;
  }
  reset() {
    console.log("reset")
    this.isEditName = false;
    this.formName.get("name")?.setValue(this.nameTmp);
  }
  save() {
    setTimeout(()=>{
      this.isEditName = false;
      const name = this.formName.get("name");
      if (name?.valid) {
        this.nameTmp = name.value;
        this.issue.sname(name.value);
      }
    },0)
  }

  editName() {
    this.nameTmp = this.issue.name;
    this.isEditName = true;
    setTimeout(() => {
      this.nameInput?.nativeElement.focus();
    }, 0);
  }
}
