import {Card} from "./card";

export class Epic extends Card{
  private _child:Set<number>;
  constructor(name:string, children:Array<number> = []) {
    super(name);
    this._child = new Set<number>(children);
  }
  child(item:number){this._child.add(item)}
  getChild() {return this._child.values()}
}
