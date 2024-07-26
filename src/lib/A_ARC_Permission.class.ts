import { A_ARC_TYPES__PermissionConstructorParam, A_ARC_TYPES__PermissionJSON } from "../types/A_ARC_Permission.types";
import { A_ARC_MaskQueryBuilder } from "./A_ARC_MaskQueryBuilder.class";


export class A_ARC_Permission {

    name: string;
    code: string;
    mask: A_ARC_MaskQueryBuilder;
    description?: string;
    icon?: string;


    constructor(param: A_ARC_TYPES__PermissionConstructorParam) {
        this.name = param.name;
        this.code = param.code;
        this.mask = param.mask;
        this.description = param.description;
        this.icon = param.icon;
    }


    toJSON(): A_ARC_TYPES__PermissionJSON {
        return {
            name: this.name,
            code: this.code,
            mask: this.mask.toString(),
            description: this.description,
            icon: this.icon,
        }
    }
}