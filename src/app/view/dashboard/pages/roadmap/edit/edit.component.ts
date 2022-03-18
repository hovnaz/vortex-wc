import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isOpen: boolean = true;
  @Input() id?:string;

  constructor() { }

  ngOnInit(): void {
  }
}
