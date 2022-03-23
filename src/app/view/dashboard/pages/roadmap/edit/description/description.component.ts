import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
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
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    // sanitize:false,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'heading',
        'fontName'
      ],
      [
        'insertVideo',
        'customClasses',
        'backgroundColor',
        'link',
        'unlink',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }
  cancel(): void {
    this.isOpen = false;
    this.code = this.codeTemp;
  }
  save(): void{
    this.isOpen = false;
    this.codeTemp = String(this.code);
    this.callback.emit(this.code);
  }
}
