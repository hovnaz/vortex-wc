import {Card} from "./card";

export class ComponentIssue extends Card {
  readonly type:string = "component";
  constructor(name:string,epic:number) {
    super(name,epic);
  }
}

