import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RoadmapRoutingModule} from "./view/roadmap/roadmap-routing.module";
import {DashboardModule} from "./view/dashboard/dashboard.module";

import {IssueSettingsComponent} from "./shared/components/issue-settings/issue-settings.component";

@NgModule({
  declarations: [
    AppComponent,
    IssueSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoadmapRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
