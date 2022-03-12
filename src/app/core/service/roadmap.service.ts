import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { Epic, EpicCard } from '../model/epic.model';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {
  private epicCard:EpicCard = {
    name:new Card
  }
  
  private epicData:Epic = {
    "Dashboard":["name"]
  }

  get epic():string[]{return Object.keys(this.epicData)}

  oneEpic(epic:string):Card[]{
    let res:Card[] = [];
      for (const child of this.epicData[epic]) {
        res.push(this.epicCard[child])
      }
    return res;
   }

  constructor() { }
}
