import { Component } from '@angular/core';
import {PagesService} from "./@core/service/pages.service";
import {BodyModel} from "./@core/model/body.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lunx';
  body:BodyModel[] = this.pagesService.GetPages
  constructor(private pagesService:PagesService) {}

}
