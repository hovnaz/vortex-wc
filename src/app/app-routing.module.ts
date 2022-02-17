import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursorToolComponent } from './@core/tool/design/cursor-tool/cursor-tool.component';
import { HeaderComponent } from './@theme/components';

const routes: Routes = [
//   {
//     path:"design/",component:CursorToolComponent
// }
  { path: '',   redirectTo: 'design', pathMatch: 'full' }, // redirect to
  { path: 'design', children: [
      {path:"cursor-tool",component:CursorToolComponent},
      {path:"",redirectTo:"cursor-tool",pathMatch: 'full'},
      {path:"**",redirectTo:"",pathMatch: 'full'},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
