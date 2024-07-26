"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ARC_SERVER_DELEGATE__PermissionAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ARC_SERVER_DELEGATE__PermissionAPI extends a_auth_1.A_AUTH_ServerDelegate_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     *
     *
     *
     * @param request
     * @param config
     * @returns
     */
    create(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/-s-dlg-/permissions`, request, config);
        });
    }
    /**
     * API to remove Permission rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/-s-dlg-/permissions/${request.aseid}`, config);
        });
    }
}
exports.A_ARC_SERVER_DELEGATE__PermissionAPI = A_ARC_SERVER_DELEGATE__PermissionAPI;
//# sourceMappingURL=A_ARC_Permission.api.js.map