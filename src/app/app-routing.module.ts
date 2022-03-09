import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:"", redirectTo:"dashboard", pathMatch:"full"},
  { path: 'zero', loadChildren: () => import('./view/zero/zero.module').then(m => m.ZeroModule) },
  { path: 'desktop', loadChildren: () => import('./view/desktop/desktop.module').then(m => m.DesktopModule) },
  { path: 'dashboard', loadChildren: () => import('./view/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
