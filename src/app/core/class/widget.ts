import {Card} from "./card";


export class Widget extends Card {
  readonly type:string = "widget";
  constructor(name:string,epic:number) {
    super(name,epic);
  }
}

