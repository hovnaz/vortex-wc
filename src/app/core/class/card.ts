export class Card {
  readonly id: string;
  private _name: string;
  private _workflow: "backlog" | "process" | "done" = "backlog";
  private _description?: string;
  private _comments?: string[];
  protected flag: boolean = false;
  readonly type: "widget" | "component";

  constructor(name: string, type: "widget" | "component", id: string) {
    this._name = name;
    this.id = id;
    this.type = type;
  }
  get comments(): string[] {return this._comments ? this._comments : []}
  get description(): string {return this._description ? this._description : ""}
  get name(): string {return this._name}

  sname(val:string){this._name = val}
  setDescription(des: string) {this._description = des}
  set comment(comment: string) {this._comments?.push(comment)}

  get workflow() {return this._workflow}
  setWorkflow(flag:"backlog" | "process" | "done") {this._workflow = flag}
}
