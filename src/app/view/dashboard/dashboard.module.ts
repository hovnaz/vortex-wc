import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { PaletteComponent } from './pages/palette/palette.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { ZeroComponent } from './pages/zero/zero.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    KanbanComponent,
    PaletteComponent,
    RoadmapComponent,
    ZeroComponent,
    ProjectsComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
