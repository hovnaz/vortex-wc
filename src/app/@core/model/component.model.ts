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

// Done 
type StructureModel = {
  [name:string]: { // tag name
    child?:string; 
    count:number;
  }
}
// Done
type bodyModel = {
  readonly tag: string;
  container?: string[]
  content?: {
    text?: string;
    attr?: { [name: string]: string; }
  }
  metadata:[string,number];
}
// Done 
type TagRootLimb = {
  type: "but" | "only";
  list: {
    [name: string]: number | { count: number; parent?: boolean }
  }
}
// Done
type TagRootContent = {
  attr?: {
    [name: string]: string | {
      list: string[];
      important?: true;
    };
  };
  text?: string[];

}
type constructorTagRoot = {
  content?: TagRootContent;
  limb?: TagRootLimb | true;
  structure?: StructureModel;
}

class TagRoot {
  private readonly tag: string; // tag name
  
  // content text or attributes default
  private content?: TagRootContent;
  private structure?: {
    limb?: TagRootLimb | true;
    // tree html or container
    structure?: StructureModel;
  }
  constructor(tag:string,data?:constructorTagRoot){
    this.tag = tag;
    if(data){
      this.content = data.content;
      this.structure!.structure = data.structure;
      this.structure!.limb = data.limb;
    }
  }
  generateTag():bodyModel{
    // content:this.content,
    let content
    let attr;
    let text:string;
    if (this.content) {
      if(this.content.text) {
        text = this.content.text[Math.floor(Math.random()*this.content.text.length)];
      }
      if (this.content.attr) {
        for (const name in this.content.attr) {
          let x = this.content.attr[name];
          // let y = x.important
          if (typeof x != "string") {
            console.log(x.important);
            
          }
          // console.log(this.content.attr[name as string]);
          
          if (this.content.attr[name]) {
            
          }

        }
      }
    }
    return {
      tag:this.tag,
      container:this.structure?.limb ? []:undefined,
      content:content,
      metadata:["",-1],
    }
  }
}



class Tag {
  readonly prefix: string = "tag-"
  private body: {[name:string]:bodyModel} = {}

  add(name: string, tag: string, data?: constructorTagRoot) {
    if (!this.body.hasOwnProperty(name)){

    }

  }
}
