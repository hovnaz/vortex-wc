import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { PaletteComponent } from './pages/palette/palette.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:"", redirectTo:"roadmap", pathMatch:"full"},
    {path:"roadmap", component:RoadmapComponent},
    {path:"kanban", component:KanbanComponent},
    {path:"palette", component:PaletteComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
