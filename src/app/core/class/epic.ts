import { Card } from "./card";

export class Epic extends Card {
    private _child:string[] = [];
    constructor(name:string,type:"widget" |"component" ="component"){
        super(name,type);
    }
    addChild(child:string){
        this.child.push(child);
    }
    get child():string[]{return this._child}
}