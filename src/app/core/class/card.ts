type BacklogType = "backlog" | "development" | "process" | "done";
export class Card {
  private _name:string;
  private _workflow: BacklogType = "backlog";
  private _description!: string;
  private _comments!: string[];
  protected _flag: boolean = false;
  private _epic:number | boolean = false; // parent

  constructor(name:string,epic:number|boolean = true) {
    this._name = name.trim();
    this._epic = epic;
  }

  get workflow(){return this._workflow}
  set workflow(flag:BacklogType){this._workflow = flag}

  get description(){return this._description}
  set description(desc:string){this._description = desc.trim()}

  get flag(){return this._flag}
  set flag(toggle:boolean){this._flag = toggle}

  get comments(){return this._comments}
  getComment(id:number):string{return this._comments[id]}
  comment(val:string){this._comments.push(val)}

  get epic() {return this._epic}

  get name():string {return this._name}
  set name(nam:string){this._name = nam.trim()}

}
