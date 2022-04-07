import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoadmapComponent} from './roadmap.component';
import {OverflowComponent} from "./pages/overflow/overflow.component";
import {TimelineComponent} from "./pages/timeline/timeline.component";
import {BoardsComponent} from "./pages/boards/boards.component";

const routes: Routes = [
  {
    path: '', component:RoadmapComponent, children: [
      {path: "", redirectTo: "overflow", pathMatch: "full"},
      {path: "overflow", component: OverflowComponent},
      {path: "timeline", component: TimelineComponent},
      {path: "boards", component: BoardsComponent},
      {path: "**", redirectTo: "", pathMatch: "full"},
    ]
  },
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadmapRoutingModule {
}
