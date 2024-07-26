import { A_ARC_TYPES__PermissionConstructorParam, A_ARC_TYPES__PermissionJSON } from "../types/A_ARC_Permission.types";
import { A_ARC_MaskQueryBuilder } from "./A_ARC_MaskQueryBuilder.class";
export declare class A_ARC_Permission {
    name: string;
    code: string;
    mask: A_ARC_MaskQueryBuilder;
    description?: string;
    icon?: string;
    constructor(param: A_ARC_TYPES__PermissionConstructorParam);
    toJSON(): A_ARC_TYPES__PermissionJSON;
}
