import {ContainerModel} from "./component.model";

export interface ArtBoardModel{
    [name:string]:{
        container:ContainerModel[];
    }
}
