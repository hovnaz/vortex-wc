export class Card {
    protected _name: string;
    protected workflow: "backlog" | "process" | "done" = "backlog";
    protected _description?: string;
    protected _comments?: string[];
    protected flag: boolean = false;
    protected readonly _type:"widget" |"component";
    constructor(name: string,type:"widget" |"component") {
        this._name = name;
        this._type = type;
    }
    get comments(): string[] { return this._comments ? this._comments : [] }
    get description(): string { return this._description ? this._description : "" }


    get name():string{return this._name}
    get type():string{return this._type}

    set description(des: string) { this._description = des }
    set comment(comment: string) { this._comments?.push(comment) }
}