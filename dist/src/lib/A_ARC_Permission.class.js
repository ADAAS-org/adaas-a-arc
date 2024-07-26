"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ARC_Permission = void 0;
class A_ARC_Permission {
    constructor(param) {
        this.name = param.name;
        this.code = param.code;
        this.mask = param.mask;
        this.description = param.description;
        this.icon = param.icon;
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            mask: this.mask.toString(),
            description: this.description,
            icon: this.icon,
        };
    }
}
exports.A_ARC_Permission = A_ARC_Permission;
//# sourceMappingURL=A_ARC_Permission.class.js.map