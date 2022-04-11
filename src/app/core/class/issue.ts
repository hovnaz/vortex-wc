import {Card} from "./card";

type issueType = "story" | "task" | "bug";

export class Issue extends Card {
  private _type:issueType = "story";
  constructor(name:string,epic:number,type:issueType="story") {
    super(name,epic);
    this._type = type;
  }
  get type(){return this._type}
  set type(T:issueType){this._type = T}
}

