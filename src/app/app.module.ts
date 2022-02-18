import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorToolComponent } from './@core/tool/design/cursor-tool/cursor-tool.component';
import { ThemeModule } from './@theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    CursorToolComponent,

  ],
  imports: [
    ThemeModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
