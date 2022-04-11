import {Issue} from "./issue";
import {Card, Epic} from "../class";

export interface Projects{
  [id:string]:{ // project key
    name:string; // project name
    description?:string; // description from project
    pages:{ [name:string]:Array<number> }, // page root layout
    epic:Issue<Epic>; // epic data
    child:Issue<Card>; // issue data
  }
}
