export interface CommentModel{
    [title:string]:{
        type:"comment" | "task" | "status" | "bug";
        comment:string;
    }
}
