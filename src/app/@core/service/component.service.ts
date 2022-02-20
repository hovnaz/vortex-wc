import { Injectable } from '@angular/core';
import { Tag, TagData } from "../model/component.model";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  baseTagJson = this.getJSON("base-tag");

 

  

  public getJSON(filename:string): Observable<any> {
    return this.http.get(`./assets/data/${filename}.json`);
}

  baseTag: TagData = {}
  
  constructor(private http: HttpClient) {
    this.createBaseTag();
    
  }

  createBaseTag() {
    this.baseTagJson.subscribe(res=>{
      for (const item of res) {

        const T = Tag.create(item.name, item.tag, item.structure,item.container);
        this.baseTag.hasOwnProperty(item.name);
        if (!this.baseTag.hasOwnProperty(item.name) && T instanceof Tag) {
          this.baseTag[item.name] = T;
        }
        else{
          throw new Error("base tag steghceluc inch vor mi ban sxal e teghi unecel");
        }
      }
      console.log(this.baseTag);
      
    })
    





    // Tag.create("list", "ul>li*", {
    //   interface: {
    //     text: true,
    //     in: true
    //   },
    //   utils: {
    //     comment: "Defines an unordered list"
    //   }
    // })
    // Tag.create("select", "#(name)select>option*", {
    //   interface: {
    //     text: ["dropdown text", "select text", "option text"],
    //     in: false
    //   },
    //   utils: {
    //     comment: "Defines a drop-down list"
    //   }
    // })
    // Tag.create("table", "table>(thead*1>tr*>th*)|(tbody*1>tr*>td)|tfoot*1>tr*>td*)", {
    //   interface: {
    //     text: ["table item", "lorem ipsum"],
    //     in: {
    //       type: "but",
    //       list: { table: 0 }
    //     }
    //   },
    //   utils: {
    //     comment: "Defines a table"
    //   }
    // })
  }
}
