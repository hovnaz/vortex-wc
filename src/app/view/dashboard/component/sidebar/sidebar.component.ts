import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isOpen:boolean = false;
  @Output() Sidebar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen = !this.isOpen;
    this.Sidebar.emit(this.isOpen);
  }
}
