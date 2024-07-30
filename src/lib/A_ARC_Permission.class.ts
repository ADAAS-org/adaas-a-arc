import { A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest } from "../api/server-commands/index.types";
import { A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS } from "../constants/actions.constants";
import { A_ARC_TYPES__PermissionConstructorParam, A_ARC_TYPES__PermissionCRUDResult } from "../types/A_ARC_Permission.types";
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

    static generateCRUDPermissions<
        C extends string | undefined = undefined,
        R extends string | undefined = undefined,
        U extends string | undefined = undefined,
        D extends string | undefined = undefined,
    >(
        entity: string,
        aliases: Partial<{
            create: C | {
                code: C,
                icon?: string,
            },
            read: R | {
                code: R,
                icon?: string,
            },
            update: U | {
                code: U,
                icon?: string,
            },
            delete: D | {
                code: D,
                icon?: string,
            },
        }>) {
        const permissions = {};

        for (const key in aliases) {
            const value = aliases[key];

            let code: string;
            let icon: string | undefined;
            let masks: Array<A_ARC_MaskQueryBuilder> = [];

            switch (key) {
                case 'create':
                    masks = [new A_ARC_MaskQueryBuilder().action(A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.CREATE)
                        .entity(entity)
                        .allow()];
                    break;
                case 'read':
                    masks = [new A_ARC_MaskQueryBuilder().action(A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.READ)
                        .entity(entity)
                        .allow()];
                    break;
                case 'update':
                    masks = [new A_ARC_MaskQueryBuilder().action(A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.UPDATE)
                        .entity(entity)
                        .allow()];
                    break;
                case 'delete':
                    masks = [new A_ARC_MaskQueryBuilder().action(A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.DELETE)
                        .entity(entity)
                        .allow()];
                    break;
            }

            if (typeof value === 'string') {
                code = value;
                icon = undefined;
            } else {
                code = value.code;
                icon = value.icon;
            }

            permissions[key] = new A_ARC_Permission({
                name: key,
                code,
                masks,
                icon,
            });
        }

        return permissions as A_ARC_TYPES__PermissionCRUDResult<C, R, U, D>;
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