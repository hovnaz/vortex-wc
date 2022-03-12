import { Card } from "../class/card";

export interface EpicCard{
    [card:string]:Card
}
export interface Epic{
    [epic:string]:string[]
}