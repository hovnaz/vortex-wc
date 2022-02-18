import { Injectable } from '@angular/core';
import { ArtBoardModel } from '../model/art-board.model';

@Injectable({
  providedIn: 'root'
})
export class ArtBoardService {
  ArtBoard:ArtBoardModel = {
    home:{
      container:[
            {content:["comp-header","comp-content","comp-footer"]},
          ]
        }
    }
  constructor() { }
}
