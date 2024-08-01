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
exports.A_ARC_APP_INTERACTIONS__PermissionAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Permissions
 */
class A_ARC_APP_INTERACTIONS__PermissionAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of permissions based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/permissions', request, {
                meta
            });
        });
    }
    /**
     * API returns permission with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/permissions/${request.permissionASEID}`, {}, {
                meta
            });
        });
    }
    /**
     *  API creates permission with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/permissions`, request, {
                meta
            });
        });
    }
    remove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/permissions/${request.aseid}`, {
                meta
            });
        });
    }
}
exports.A_ARC_APP_INTERACTIONS__PermissionAPI = A_ARC_APP_INTERACTIONS__PermissionAPI;
//# sourceMappingURL=A_ARC_Permission.api.js.map