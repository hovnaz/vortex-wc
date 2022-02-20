import { Component } from '@angular/core';
import { ComponentService } from './@core/service/component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lunx';
  constructor(private componentService:ComponentService) {}
}
