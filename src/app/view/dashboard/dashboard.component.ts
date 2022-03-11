import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isOpenSidebar:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sidebar(event:boolean){
    this.isOpenSidebar = event;
  }
}