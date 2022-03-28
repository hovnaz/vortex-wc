import { Card } from "./card";

export class Epic extends Card {
    private _child:string[] = [];
    readonly isEpic:true = true;
    constructor(name:string,type:"widget" |"component",id:string){
        super(name,type,id);
    }
    addChild(id:string){
      this._child.push(id);
    }
    get child():string[]{return this._child;}
}
