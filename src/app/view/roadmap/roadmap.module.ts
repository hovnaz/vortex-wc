import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';
import { OverflowComponent } from './pages/overflow/overflow.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    RoadmapComponent,
    OverflowComponent,
    TimelineComponent,
    BoardsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule
  ]
})
export class RoadmapModule { }
