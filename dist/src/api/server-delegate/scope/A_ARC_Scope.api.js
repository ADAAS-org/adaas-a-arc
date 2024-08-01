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
exports.A_ARC_SERVER_DELEGATE__ScopeAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
class A_ARC_SERVER_DELEGATE__ScopeAPI extends a_auth_1.A_AUTH_ServerCommands_APIProvider {
    get baseURL() {
        return this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns a list of scopes to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/-s-dlg-/scopes', request, config);
        });
    }
    /**
     * Checks the scope existence in ARC
     *
     * @param request
     * @param meta
     * @returns
     */
    exists(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/-s-dlg-/scopes', request, config);
        });
    }
    /**
     * API to create a new scope
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post('/-s-dlg-/scopes', request, config);
        });
    }
    /**
     * The method to remove scope by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove(request, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/-s-dlg-/scopes/${request.aseid}`, config);
        });
    }
}
exports.A_ARC_SERVER_DELEGATE__ScopeAPI = A_ARC_SERVER_DELEGATE__ScopeAPI;
//# sourceMappingURL=A_ARC_Scope.api.js.map