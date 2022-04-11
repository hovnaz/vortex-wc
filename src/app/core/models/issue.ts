import {Card} from "../class";

export interface Issue<T extends Card>{
  next:number; // id
  data:{[id:number]:T};
}
