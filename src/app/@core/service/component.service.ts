import { Injectable } from '@angular/core';
import {BaseTagModel, ComponentModel} from "../model/component.model";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  component:ComponentModel = {

  }
  widget:ComponentModel = {

  }
  baseTag:BaseTagModel = {
    link:{
      tag:"a",
      interface:{
        type:"but",
        text:true,
        in:{
          link:{count:0,parent:true}
        }
      },
      utils:{
        attr:{
          href:{name:"href",value:"javascript:void(0)"}
        }
      }
    },
    button:{
      tag:"button",
      interface:{
        text:true,
        in:false,
      },
    },
    header:{
      tag:["h1","h2","h3","h4","h5","h6",],
      interface:{
        text:true,
        in:false,
      },
    },
    image:{
      tag:"!img",
      interface:{
        in:false
      },
      utils:{
        attr:{
          src:{name:"src",value:"https://fakeimg.pl/300"},
          alt:{name:"alt",value:"image"},
        }
      }
    },
    input:{
      tag:"!input",
      interface:{
        in:false
      },
      utils:{
        attr:{
          type:{
            name:"type",
            value:"text",
            list:["text","number","password","checkbox","radio","submit","range","file","email","date","color"],
          }
        }
      }
    },
    list:{
      tag:"ul",
      interface:{
        type:"only",
        in:{li:-1}
      },
      private:{
        child:{
          li:{
            tag:"li",
          }
        }
      },
      utils:{
        attr:{
          type:{
            name:"type",
            value:"text",
            list:["text","number","password","checkbox","radio","submit","range","file","email","date","color"],
          }
        }
      }
    },
  }

  constructor() { }
}
