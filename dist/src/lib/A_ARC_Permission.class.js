"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ARC_Permission = void 0;
const actions_constants_1 = require("../constants/actions.constants");
const A_ARC_MaskQueryBuilder_class_1 = require("./A_ARC_MaskQueryBuilder.class");
class A_ARC_Permission {
    constructor(param) {
        this.name = param.name;
        this.code = param.code;
        this.masks = param.masks;
        this.description = param.description;
        this.icon = param.icon;
    }
    static generateCRUDPermissions(entity, aliases) {
        const permissions = {};
        for (const key in aliases) {
            const value = aliases[key];
            let code;
            let icon;
            let masks = [];
            switch (key) {
                case 'create':
                    masks = [new A_ARC_MaskQueryBuilder_class_1.A_ARC_MaskQueryBuilder().action(actions_constants_1.A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.CREATE)
                            .entity(entity)
                            .allow()];
                    break;
                case 'read':
                    masks = [new A_ARC_MaskQueryBuilder_class_1.A_ARC_MaskQueryBuilder().action(actions_constants_1.A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.READ)
                            .entity(entity)
                            .allow()];
                    break;
                case 'update':
                    masks = [new A_ARC_MaskQueryBuilder_class_1.A_ARC_MaskQueryBuilder().action(actions_constants_1.A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.UPDATE)
                            .entity(entity)
                            .allow()];
                    break;
                case 'delete':
                    masks = [new A_ARC_MaskQueryBuilder_class_1.A_ARC_MaskQueryBuilder().action(actions_constants_1.A_ARC_CONSTANTS__DEFAULT_CRUD_ACTIONS.DELETE)
                            .entity(entity)
                            .allow()];
                    break;
            }
            if (typeof value === 'string') {
                code = value;
                icon = undefined;
            }
            else {
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
        return permissions;
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            description: this.description,
            icon: this.icon,
            Masks: this.masks.map(mask => ({
                mask: mask.toString()
            })),
        };
    }
}
exports.A_ARC_Permission = A_ARC_Permission;
//# sourceMappingURL=A_ARC_Permission.class.js.map