
class StylesX {

  constructor() {

  }
}

class CommentX {
  // readonly list: 

  private comments!: {
    features?: string;
    comment?: string;
    task?: string;
    status?: string;
    bug?: string;
  };
  constructor() {
    
  }
}

class ContainerX {
  // utils
  private static: boolean = false;
  private lock: boolean = false;
  private looking: boolean = true;
  private comment?: CommentX;

  private container: string | (string | LayoutX[])[];
  constructor(container: string | string[]) {
    this.container = container;
  }
}
type LayoutBootstrap = "justify-content" | "";
type LayoutBootstrapCol = "col" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12";

class LayoutX {
  private type:"grid"| "row" | "header" | "coplex" = "coplex";
  private bootstrap: LayoutBootstrap = "";
  private col: LayoutBootstrapCol[] = ["col"];
  constructor() {
  }
}

class ComponentX {
  private prefix:"component-" | "widget-" = "component-";
  private name: string;

  // utils
  private static: boolean = false;
  private lock: boolean = false;
  private looking: boolean = true;
  private comment?: CommentX;
  private styles?: StylesX;

  // containerprefix
  private container?: ContainerX[];

  // interface
  private page:string | string[] = "all";
  private parent:string | string[] = "all";
  private count:number = -1;

  constructor(name: string, container: string[] | string) {
    this.name = name;
    // this.create();
    // this.static = false;
    // this.
  }
  static create() {

  }
}

type TagIn = {
  type: "but" | "only";
  list: {
    [tag: string]: number | {
      count: number;
      parent?: boolean;
    }
  }
}

type TagAttr = {
  [name: string]: string | {
    name?: string;
    value?: string | string[] | true;
    list?: string[];
    addendum?:boolean;
  }
}
type TagStructure = {
  utils?: {
    static?: boolean;
    lock?: boolean;
    looking?: boolean;
    comment?: string;
  },
  interface?:{
    text?:boolean | string | string[];
    in?: TagIn | boolean;
  }
  attr?:TagAttr;
  styles?: StylesX;
}
class TagX {
  readonly prefix:string = "tag-";
  // utils
  private static: boolean = false;
  private lock: boolean = false;
  private looking: boolean = true;
  private styles?: StylesX;
  private comment?: CommentX;

  // interface 
  private text: boolean = false;
  private in?: TagIn | boolean = true;

  // tag
  private name?: string;
  private tag: string | string[];
  private attr?:TagAttr;

  // container
  private container?: ContainerX[];

  constructor(name: string, tag: string | string[], structure?: TagStructure,container?: ContainerX[]) {
    this.tag = tag;
  }
  static create(name: string, tag: string | string[], structure?: TagStructure,container?: ContainerX[]) {
    try {
      let x = new TagX(name,tag,structure,container);
    } catch (error) {
      console.error("get error");
    }
  }
}

TagX.create("link","a",{
  attr:{
    "href":{
      name:"href",
      value:"javascript:void(0)"
    },
    "target":{
      name:"target",
      list:["_blank","_self","_parent","_top"],
      value:true,
      addendum:true,
    }
  },
  interface:{
    text:true,
    in:{
      type:"but",
      list:{link:{count:0,parent:true}}
    }
  },
  utils:{
    comment:"Defines a hyperlink"
  }
})
TagX.create("button","button",{
  interface:{
    text:["button","click me"],
    in:false,
  },
  utils:{
    comment:"Defines a clickable button"
  }
})
TagX.create("header",["h2", "h3", "h4", "h5", "h6"],{
  interface:{
    text:"header text",
    in:false,
  },
  utils:{
    comment:"Defines HTML headings"
  }
})
TagX.create("paragraph","p",{
  interface:{
    text:[
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Hello text"
    ],
    in:false,
  },
  utils:{
    comment:"Defines a paragraph"
  }
})
TagX.create("image","img",{
  attr:{
    src:{
      name:"image",
      list:["https://picsum.photos/300","https://picsum.photos/1200/","https://picsum.photos/1600","https://picsum.photos/2400/"],
      value:"https://picsum.photos/2000"
    },
    alt:{
      name:"alt",
      value:"image",
    }
  },
  interface:{
    text:false,
    in:false,
  },
  utils:{
    comment:"Defines an image"
  }
})
TagX.create("form","form",{
  interface:{
    text:false,
    in:{
      type:"but",
      list:{form:0}
    }
  },
  utils:{
    comment:"Defines an HTML form for user input"
  }
})
TagX.create("input","!input",{
  attr:{
    type: {
      name: "type",
      value: "text",
      list: ["text", "number", "password", "checkbox", "radio", "submit", "range", "file", "email", "date", "color"],
    },
    placeholder:{
      name:"placeholder",
      value:["placeholder text","lorem ipsum"],
    }
  },
  interface:{
    text:false,
    in:false,
  },
  utils:{
    comment:"Defines an input control"
  }
})
TagX.create("textarea","textarea",{
  attr:{
    placeholder:{
      name:"placeholder",
      value:["placeholder text","lorem ipsum"],
    }
  },
  interface:{
    text:false,
    in:false,
  },
  utils:{
    comment:"Defines a multiline input control (text area)"
  }
})
TagX.create("label","label",{
  interface:{
    text:false,
    in:false,
  },
  utils:{
    comment:"Defines a label for an <input> element"
  }
})
TagX.create("list","ul>li*",{
  interface:{
    text:true,
    in:true
  },
  utils:{
    comment:"Defines an unordered list"
  }
})
TagX.create("select","#(name)select>option*",{
  interface:{
    text:["dropdown text","select text","option text"],
    in:false
  },
  utils:{
    comment:"Defines a drop-down list"
  }
})
TagX.create("table","table>(thead*1>tr*>th*)|(tbody*1>tr*>td)|tfoot*1>tr*>td*)",{
  interface:{
    text:["table item","lorem ipsum"],
    in:{
      type:"but",
      list:{table:0}
    }
  },
  utils:{
    comment:"Defines a table"
  }
})
