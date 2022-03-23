import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DashboardModule} from "./view/dashboard/dashboard.module";
import {ZeroModule} from "./view/zero/zero.module";
import {DesktopModule} from "./view/desktop/desktop.module";
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ZeroModule,
    DesktopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
