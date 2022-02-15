import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursorToolComponent } from './@core/tool/design/cursor-tool/cursor-tool.component';
import { HeaderComponent } from './@theme/components';

const routes: Routes = [
//   {
//     path:"design/",component:CursorToolComponent
// }
{ path: '', component: HeaderComponent },
{ path: 'design', component: CursorToolComponent },
];

// children:[
//   {path:"cursor-tool",component:CursorToolComponent}
// ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
