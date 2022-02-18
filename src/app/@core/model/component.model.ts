import {StylesModel} from "./styles.model";
import {CommentModel} from "./comment.model";

interface ContainerModel{
  [name:string]: {
    content: string[];
    utils:{
      static?:boolean;
      lock?:boolean;
      looking?:boolean;
    }
  };
}

export interface ComponentModel{
    [name:string]: {
      type:"component" | "widget";
      content: ContainerModel[];
      private:{
        child?:ComponentModel;
      }
      interface?:{
        page?:string | string[]; // default all
        count?:number; // default many
        place?:string | string[]; // default all
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
    tag:string | string[]; // syntax !tag, #tag, *tag
    content?: ContainerModel[];
    private?:{
      child?: BaseTagModel;
    }
    interface?:{
      type?:"but" | "only";
      text?:boolean;
      in?: false | { // default many
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
