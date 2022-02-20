import { ComponentService } from "../service/component.service";

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

export interface TagData{
  [name:string]:Tag;
}

export class Tag {
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
  private tag: string | string[] = [];
  private attr?:TagAttr;

 // will set from components.
  // container
  private container?: ContainerX[];

  constructor(name: string, tag: string | string[], structure?: TagStructure,container?: ContainerX[]) {
    this.tag = tag;
    console.log("mtav");
  }
  static create(name: string, tag: string | string[], structure?: TagStructure,container?: ContainerX[]):Tag | undefined{
    try {
      let NewTag = new Tag(name,tag,structure,container);
      return NewTag;
    } catch (error) {
      return undefined
    }
  }
}