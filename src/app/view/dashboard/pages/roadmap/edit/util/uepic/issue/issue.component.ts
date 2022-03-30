import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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
  @Output() link = new EventEmitter<string[]>();
  @Output() changeEmitter  = new EventEmitter();
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
    this.isEditName = false;
    this.formName.get("name")?.setValue(this.nameTmp);
  }
  save() {
    const name = this.formName.get("name");
    if (name?.valid) {
      this.nameTmp = name.value;
      this.issue.sname(name.value);
    }
    this.isEditName = false;
  }
  editName() {
    this.nameTmp = this.issue.name;
    this.isEditName = true;
    setTimeout(() => {
      this.nameInput?.nativeElement.focus();
    }, 0);
  }
  intervalSave() {
    this.isEditName = false;
    setTimeout(()=>{
      this.save();
    },200)
  }
  sendLink(){
    this.link.emit([this.issue.isEpic?'epic':this.issue.type,this.issue.id]);
  }
  change(workflow:string): void{
    this.changeEmitter.emit(workflow);
    this.issue.setWorkflow(workflow);
  }
}
