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
import { EpicComponent } from './pages/roadmap/epic/epic.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardPipe} from "../../core/pipe/card.pipe";
import { EditComponent } from './pages/roadmap/edit/edit.component';
import {DescriptionComponent} from "./pages/roadmap/edit/description/description.component";
import {materialExampleModule} from "../../../material.module";

import { UepicComponent } from './pages/roadmap/edit/util/uepic/uepic.component';
import { UwidgetComponent } from './pages/roadmap/edit/util/uwidget/uwidget.component';
import { UcompComponent } from './pages/roadmap/edit/util/ucomp/ucomp.component';
import { IssueComponent } from './pages/roadmap/edit/util/uepic/issue/issue.component';
import { ProgressComponent } from './pages/roadmap/edit/util/uepic/progress/progress.component';

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
    EpicComponent,
    CardPipe,
    EditComponent,
    DescriptionComponent,
    UepicComponent,
    UwidgetComponent,
    UcompComponent,
    IssueComponent,
    ProgressComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    materialExampleModule,
    FormsModule,


  ]
})
export class DashboardModule { }
