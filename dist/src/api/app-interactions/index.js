"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = exports.Scope = exports.Resource = exports.ACL = void 0;
const A_ARC_ACL_api_1 = require("./acl/A_ARC_ACL.api");
const A_ARC_Resource_api_1 = require("./resource/A_ARC_Resource.api");
const A_ARC_Scope_api_1 = require("./scope/A_ARC_Scope.api");
const A_ARC_Permission_api_1 = require("./permission/A_ARC_Permission.api");
const A_ARC_Context_def_1 = require("../../definitions/A_ARC_Context.def");
exports.ACL = new A_ARC_ACL_api_1.A_ARC_APP_INTERACTIONS__ACLAPI(A_ARC_Context_def_1.A_ARC_Context);
exports.Resource = new A_ARC_Resource_api_1.A_ARC_APP_INTERACTIONS__ResourceAPI(A_ARC_Context_def_1.A_ARC_Context);
exports.Scope = new A_ARC_Scope_api_1.A_ARC_APP_INTERACTIONS__ScopeAPI(A_ARC_Context_def_1.A_ARC_Context);
exports.Permission = new A_ARC_Permission_api_1.A_ARC_APP_INTERACTIONS__PermissionAPI(A_ARC_Context_def_1.A_ARC_Context);
//# sourceMappingURL=index.js.map