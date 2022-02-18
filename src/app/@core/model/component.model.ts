import {StylesModel} from "./styles.model";
import {CommentModel} from "./comment.model";

export interface ContainerModel{
  content: (string | LayoutModel[])[];
  utils?:{
    static?:boolean;
    lock?:boolean;
    looking?:boolean;
  }
}

export interface ComponentModel{
    [name:string]: {
      type:"component" | "widget";
      content: ContainerModel[];
      interface?:{
        page?:string | string[]; // default all
        parent?:string | string[]; // 
        count?:number; // default many
      }
      utils?:{
        lock?:boolean;
        looking?:boolean;
        comment?:CommentModel;
        styles?:StylesModel;
      }
      comment?:string;
    }
}

export interface BaseTagModel{
  [name:string]: {
    /*
    * #syntax
    *
    * !tag --> no need to close
    */
   type:"baseTag";
    tag:string | string[]; // syntax !tag, #tag, *tag
    content?: ContainerModel[];
    private?:{
      child?: BaseTagModel;
    }
    interface?:{
      type?:"but" | "only";
      text?:boolean;
      in?: boolean | { // default many
        [name:string]:number | {
          count:number;
          parent?:boolean;
        }
      };
    };
    utils?:{
      lock?:boolean;
      looking?:boolean;
      attr?:{
        [name:string]:string | {
          value?:string;
          name?:string;
          list?:string[];
        }
      }
      styles?:StylesModel;
      comment?:CommentModel;
    }
    comment?:string;
  };
}
type BootstrapSize = "col" | "col-2" | "col-3" | "col-4" | "col-5" | "col-6" | "col-7" | "col-8" | "col-9" | "col-10" | "col-11" | "col-12";

interface LayoutModelCol{
  type:"layout-col";
  bootstrap:BootstrapSize;
  content:ContainerModel[];
}
export interface LayoutModel{
  type:"layout-row";
  bootstrap?:"justify-content",
  col:LayoutModelCol[];
}
