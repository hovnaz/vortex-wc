import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



import {
  HeaderComponent,
  SidebarComponent
} from './components/index';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

const COMPONENTS= [
  HeaderComponent,
  SidebarComponent
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
    exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ThemeModule {}
