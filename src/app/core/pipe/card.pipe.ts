import { Pipe, PipeTransform } from '@angular/core';
import {RoadmapService} from "../service/roadmap.service";

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {
  constructor(private roadmap:RoadmapService) {
  }
   transform(card: string[],type:"widget"|"component"|"epic") {
    // roadmap
    return  card.map(id => this.roadmap.get(type,id));
  }

  // static transform(card: string[], type: string) {
  //
  // }
}
