import { Injectable } from '@angular/core';
import {BodyModel} from "../model/body.model";

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private pages = [
    {
      name:"Home",
    }
  ]
  get GetPages(){return this.pages}
  constructor() { }
}
