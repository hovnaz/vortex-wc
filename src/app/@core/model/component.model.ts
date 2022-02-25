// import { ComponentService } from "../service/component.service";
//
// class StylesX {
//
//   constructor() {
//
//   }
// }
//
// class CommentX {
//   // readonly list:
//
//   private comments!: {
//     features?: string;
//     comment?: string;
//     task?: string;
//     status?: string;
//     bug?: string;
//   };
//   constructor() {
//
//   }
// }
//
// class ContainerX {
//   // utils
//   private static: boolean = false;
//   private lock: boolean = false;
//   private looking: boolean = true;
//   private comment?: CommentX;
//
//   private container: string | (string | LayoutX[])[];
//   constructor(container: string | string[]) {
//     this.container = container;
//   }
// }
// type LayoutBootstrap = "justify-content" | "";
// type LayoutBootstrapCol = "col" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12";
//
// class LayoutX {
//   private type: "grid" | "row" | "header" | "coplex" = "coplex";
//   private bootstrap: LayoutBootstrap = "";
//   private col: LayoutBootstrapCol[] = ["col"];
//   constructor() {
//   }
// }
//
// class ComponentX {
//   private prefix: "component-" | "widget-" = "component-";
//   private name: string;
//
//   // utils
//   private static: boolean = false;
//   private lock: boolean = false;
//   private looking: boolean = true;
//   private comment?: CommentX;
//   private styles?: StylesX;
//
//   // containerprefix
//   private container?: ContainerX[];
//
//   // interface
//   private page: string | string[] = "all";
//   private parent: string | string[] = "all";
//   private count: number = -1;
//
//   constructor(name: string, container: string[] | string) {
//     this.name = name;
//     // this.create();
//     // this.static = false;
//     // this.
//   }
//   static create() {
//
//   }
// }
//
// type TagIn = {
//   type: "but" | "only";
//   list: {
//     [tag: string]: number | {
//       count: number;
//       parent?: boolean;
//     }
//   }
// }
//
// type TagAttr = {
//   [name: string]: string | {
//     name?: string;
//     value?: string | string[] | true;
//     list?: string[];
//     addendum?: boolean;
//   }
// }
// type TagStructure = {
//   utils?: {
//     static?: boolean;
//     lock?: boolean;
//     looking?: boolean;
//     comment?: string;
//   },
//   interface?: {
//     text?: boolean | string | string[];
//     in?: TagIn | boolean;
//   }
//   attr?: TagAttr;
//   styles?: StylesX;
// }
//
// export interface TagData {
//   [name: string]: Tag;
// }
// // petq e entarkvi popoxutyan
// export class Tag {
//   readonly prefix: string = "tag-";
//   // utils
//   private static: boolean = false;
//   private lock: boolean = false;
//   private looking: boolean = true;
//   private styles?: StylesX;
//   private comment?: CommentX;
//
//   // interface
//   private text: boolean = false;
//   private in?: TagIn | boolean = true;
//
//   // tag
//   private name?: string;
//   private tag: string | string[] = [];
//   private attr?: TagAttr;
//
//   // will set from components.
//   // container
//   private containerData?: ContainerX[];
//   get container() { return this.containerData }
//   constructor(name: string, tag: string | string[], structure?: TagStructure, container?: ContainerX[]) {
//     this.tag = tag;
//   }
//   static create(name: string, tag: string | string[], structure?: TagStructure, container?: ContainerX[]): Tag | undefined {
//     try {
//       let NewTag = new Tag(name, tag, structure, container);
//       return NewTag;
//     } catch (error) {
//       return undefined
//     }
//   }
// }
//
//
//
// /*
// name Done
// body
// content
// container Done
// */
//
// interface TagContentModel {
//   text?: string;
//   attr?: {
//     [name: string]: string | number;
//   }
// }
//
// interface WidgetBodyModel {
//   tag: string;
//   name: string;
//   text?: string;
//   attr?: {
//     [name: string]: string | number;
//   }
//   container?: {
//     [container_name: string]: WidgetBodyModel[];
//   }
// }
//
// class WidgetRoot {
//
//   private static: boolean = false;
//   private lock: boolean = false;
//   private looking: boolean = true;
//   private comment?: CommentX;
//   private styles?: StylesX;
//
//   //permission of container
//   private container?: string | string[];
//
//   private body?: WidgetBodyModel[];
//
//   // interface
//   // petq e dzevapoxvi
//   private page: string | string[] = "all";
//   private parent: string | string[] = "all";
//   private count: number = Infinity;
//
//   constructor(body?:WidgetBodyModel[],container?: string | string[]) {
//     this.body = [];
//     this.add({name:"root"},"link","a");
//     // this.add({name:"link"},"link","a");
//   }
//   add(place:{name:string,container?:string},name:string,tag:string){}
//   move(name:string){}
//   // remove(name:string){}
// }
//
// class Widget {
//   readonly prefix = "widget-";
//   private data?: {
//     [name: string]: WidgetRoot
//   }
//
//   // permission(){}
//   // get(){}
//   // add(){}
//   // remove(){}
//   // edit(){}
// }
type StructureModel = {
  [name:string]:{ // tag name
    count:number | true;
    important?:boolean;
    // StructureModel -> tree
    // string -> container
    child?:StructureModel | string;
  }
}
type bodyModel = {
  readonly tag: string;
  readonly name: string;
  container?: bodyModel[]
  content?: {
    text?: string;
    attr?: { [name: string]: string; }
  }
}


type TagRootLimb = {
  type: "but" | "only";
  list: {
    [name: string]: number | { count: number; parent?: boolean }
  }
}

type TagRootContent = {

  attr?: {
    [name: string]: string | {
      list:string[];
      value:string;
      important?:true;
    };
  };
  text?: string | string[];

}

type constructorTagRoot = {
  content?: TagRootContent;
  limb?:TagRootLimb;
  structure?:StructureModel;
  container?:boolean;
}




class TagRoot {
  private readonly tag: string; // tag name
  private readonly name: string // declared name unique
  // content text or attributes default
  private content?: TagRootContent;
  private structure?: {
    container?:boolean;
    limb?: TagRootLimb;
    // tree html or container
    structure:StructureModel;
  }
  private get randomText():string{
    function rand(min:number,max:number = min+1):number{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let text = this.content?.text;
    if (text == undefined) return "";
    if (Array.isArray(text)) text = text[rand(0,text.length)];

    return text
  }

  generateBody(name: string, content?: { text?: string, attr?: { [name: string]: string } }):bodyModel {
    let body: bodyModel = {
      tag: this.name,
      name: name,
    }

    if (this.structure?.container) body["container"] = []
    if (this.content) {
      body["content"] = {}
      if (this.content["attr"]) {
        body["content"]["attr"] = {}
        // add all important attr
        for (const key in this.content["attr"]) {
          const item = this.content["attr"][key];
          if (!(typeof item == "string") && item.important){
            body["content"]["attr"][key] = item.value;
          }
        }
      }

      if (this.content.text) {
        const TEXT = this.randomText
        body["content"]["text"] = content ? content.text ? content.text : TEXT : TEXT;
      }
    }
    return body;
  }
  constructor(name:string,tag:string,data?:constructorTagRoot) {
    this.name = name;
    this.tag = tag;
  }
}


class Tag {
  readonly prefix:string = "tag-"
  private data:{[name:string]:TagRoot;} = {};

  add(name:string,tag:string,data?:constructorTagRoot){
    if (!this.data.hasOwnProperty(name))
    // data[name]
    // this.data
  }
}
