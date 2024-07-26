import { A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest } from "../api/server-commands/index.types";
import { A_ARC_TYPES__PermissionConstructorParam } from "../types/A_ARC_Permission.types";
import { A_ARC_MaskQueryBuilder } from "./A_ARC_MaskQueryBuilder.class";


export class A_ARC_Permission {

    name: string;
    code: string;
    masks: Array<A_ARC_MaskQueryBuilder>;
    description?: string;
    icon?: string;


    constructor(param: A_ARC_TYPES__PermissionConstructorParam) {
        this.name = param.name;
        this.code = param.code;
        this.masks = param.masks;
        this.description = param.description;
        this.icon = param.icon;
    }


    toJSON(): A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest {
        return {
            name: this.name,
            code: this.code,
            description: this.description,
            icon: this.icon,
            Masks: this.masks.map(mask => ({
                mask: mask.toString()
            })),
        }
    }
}