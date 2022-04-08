import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';
import { OverflowComponent } from './pages/overflow/overflow.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {FilterComponent} from "../../shared/components/filter/filter.component";
import { PagesComponent } from './components/sidebar/pages/pages.component';


@NgModule({
  declarations: [
    RoadmapComponent,
    OverflowComponent,
    TimelineComponent,
    BoardsComponent,
    HeaderComponent,
    SidebarComponent,
    FilterComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule
  ]
})
export class RoadmapModule { }
