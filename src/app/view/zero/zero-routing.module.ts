import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZeroComponent } from './zero.component';

const routes: Routes = [{ path: '', component: ZeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZeroRoutingModule { }
