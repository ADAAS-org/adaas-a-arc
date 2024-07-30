import { A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest } from "../api/server-commands/index.types";
import { A_ARC_TYPES__PermissionConstructorParam, A_ARC_TYPES__PermissionCRUDResult } from "../types/A_ARC_Permission.types";
import { A_ARC_MaskQueryBuilder } from "./A_ARC_MaskQueryBuilder.class";
export declare class A_ARC_Permission {
    name: string;
    code: string;
    masks: Array<A_ARC_MaskQueryBuilder>;
    description?: string;
    icon?: string;
    constructor(param: A_ARC_TYPES__PermissionConstructorParam);
    static generateCRUDPermissions<C extends string | undefined = undefined, R extends string | undefined = undefined, U extends string | undefined = undefined, D extends string | undefined = undefined>(entity: string, aliases: Partial<{
        create: C | {
            code: C;
            icon?: string;
        };
        read: R | {
            code: R;
            icon?: string;
        };
        update: U | {
            code: U;
            icon?: string;
        };
        delete: D | {
            code: D;
            icon?: string;
        };
    }>): A_ARC_TYPES__PermissionCRUDResult<C, R, U, D>;
    toJSON(): A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest;
}
