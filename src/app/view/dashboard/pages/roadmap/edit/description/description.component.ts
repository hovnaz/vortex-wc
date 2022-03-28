import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() code = '';
  @Output() callback = new EventEmitter<string>();
  codeTemp:string = String(this.code);
  isOpen:boolean = false;
  @ViewChild("editor") editor?:any;
  constructor() { }

  ngOnInit(): void {
  }
  cancel(): void {
    this.isOpen = false;
    this.code = this.codeTemp;
  }
  save(): void{
    this.code = this.editor.nativeElement.innerHTML;
    this.isOpen = false;
    this.codeTemp = String(this.code);
    this.callback.emit(this.code);
  }
}











