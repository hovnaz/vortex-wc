import {Card} from "./card";

export class ComponentEpic extends Card{
  constructor(name:string,epic:string,id:string){
    super(name,"component",id,epic);
  }
}
