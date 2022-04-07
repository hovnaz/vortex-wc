import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", redirectTo:"roadmap", pathMatch:"full"},
  { path: 'dashboard', loadChildren: () => import('./view/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'roadmap', loadChildren: () => import('./view/roadmap/roadmap.module').then(m => m.RoadmapModule) },
  { path:"**", redirectTo:"roadmap", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
