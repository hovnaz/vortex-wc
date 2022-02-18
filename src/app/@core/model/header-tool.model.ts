interface headerToolEx{
  name:string;
  logo:string;
  route:string[];
  hotkey?:string[];
  comment?:string;
  active?:boolean;
}
export interface headerTool{
    left?:headerToolEx[];
    right?:headerToolEx[];
}

