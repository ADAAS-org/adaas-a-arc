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
exports.A_ARC_SERVER_DELEGATE__ACLAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ARC_SERVER_DELEGATE__ACLAPI extends a_auth_1.A_AUTH_ServerCommands_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Verify the Access to requested resource or operation for the application
     *
     * @param request
     * @param meta
     * @returns
     */
    verify(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/-s-dlg-/acl/verify', request, {
                meta
            });
        });
    }
    /**
     * API to remove ACL rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/-s-dlg-/acls/remove`, request, {
                meta
            });
        });
    }
}
exports.A_ARC_SERVER_DELEGATE__ACLAPI = A_ARC_SERVER_DELEGATE__ACLAPI;
//# sourceMappingURL=A_ARC_ACL.api.js.map