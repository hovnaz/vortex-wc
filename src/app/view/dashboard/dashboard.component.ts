import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title:string = "Dashboard";
  isOpenSidebar:boolean = false;
  product: any;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public titleService: Title
  ) { }

  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();
    this.router
    .events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => {
      const child = this.activatedRoute.firstChild;
      if (child?.snapshot.data['title']) {
        return child.snapshot.data['title'];
      } else {
        return appTitle;
      }
    })
  ).subscribe((ttl: string) => {
    this.title = ttl;
    this.titleService.setTitle(ttl);
  });
  }
  sidebar(event:boolean){
    this.isOpenSidebar = event;
  }
}