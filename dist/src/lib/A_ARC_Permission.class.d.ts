import { A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest } from "../api/server-commands/index.types";
import { A_ARC_TYPES__PermissionConstructorParam } from "../types/A_ARC_Permission.types";
import { A_ARC_MaskQueryBuilder } from "./A_ARC_MaskQueryBuilder.class";
export declare class A_ARC_Permission {
    name: string;
    code: string;
    masks: Array<A_ARC_MaskQueryBuilder>;
    description?: string;
    icon?: string;
    constructor(param: A_ARC_TYPES__PermissionConstructorParam);
    toJSON(): A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest;
}
