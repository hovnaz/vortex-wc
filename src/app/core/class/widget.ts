import {Card} from "./card";

export class WidgetEpic extends Card{
    constructor(name:string,epic:string,id:string){
      super(name,"widget",id,epic)
    }
}
